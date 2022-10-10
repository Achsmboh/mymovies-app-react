import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/ListOfNowPlayingMovies";
import DetailMovie from "../Pages/DetailMovie";
import Example from "../Pages/Example";
import ListFavoriteMoviesPage from "../Pages/ListFavoriteMoviesPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id_movie" element={<DetailMovie />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/ListFavoriteMoviesPage" element={<ListFavoriteMoviesPage />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
