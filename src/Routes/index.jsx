import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "Pages/ListOfNowPlayingMovies";
import DetailMovie from "Pages/DetailMovie";

import ListFavoriteMoviesPage from "Pages/ListFavoriteMoviesPage";

import { ThemeContext } from "Utils/context";
import { setFavorites } from "Utils/Redux/Reducers/reducer";

function App() {
  const dispath = useDispatch();
  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispath(setFavorites(JSON.parse(getMovies)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<DetailMovie />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/ListFavoriteMoviesPage" element={<ListFavoriteMoviesPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
