import React, { useState, useEffect } from "react";

import { WithRouter } from "Utils/Navigation";
import { useTitle } from "Utils/useTitle";

import CardRemove from "Components/CardRemove";
import Layout from "Components/Layout";
import Loading from "Components/Loading";
import { data } from "autoprefixer";

function ListFavoriteMoviesPage(props) {
  // ---=== CONSTRUCTOR START ===---
  const [title] = useState("MY FAVORITE");
  const [datas, setData] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  // ---=== CONSTRUCTOR START ===--
  useTitle("Favorite");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      setData(parsedMovies);
      setLoading(false);
    }
  }

  function handleRemoveFav(movie) {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */

    const del = datas.filter((e) => e !== movie);
    setData(del);
    localStorage.setItem("favMovies", del);
  }

  return (
    <Layout>
      <div>
        <p className="text-center my-10 p-1 font-bold text-lg text-white">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 font-bold">
          {loading
            ? skeleton.map((item) => <Loading key={item} />)
            : datas.map((data) => <CardRemove key={data.id} image={data.poster_path} title={data.title} onNavigate={() => props.navigate(`/detail/${data.id}`)} removeFavorite={() => handleRemoveFav(data)} />)}
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(ListFavoriteMoviesPage);
