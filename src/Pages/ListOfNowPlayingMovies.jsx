import { useState, useEffect } from "react";
import axios from "axios";
import "Styles/App.css";

import { WithRouter } from "Utils/Navigation";
import { useTitle } from "Utils/useTitle";

import { ButtonSecondary } from "Components/Button";
import Card from "Components/Card";
import Layout from "Components/Layout";
import Loading from "Components/Loading";

function Home(props) {
  // ---=== CONSTRUCTOR START ===---
  const [title] = useState("NOW PLAYING");
  const [datas, setData] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // ---=== CONSTRUCTOR START ===---
  useTitle("My Movie");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${page}`)
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setData(temp);
        setPage(newPage);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      /*
      cek film yang diinputkan ada di local storage atau tidak (saran menggunakan method .find)
      if movie.id === data.id

      - kalau gak ada, push ke parsedMovies
      - kalau ada, kasih alert (film sudah ditambahkan sebelumnya)
      */

      const parsedMovies = JSON.parse(getMovies);
      const favMovie = parsedMovies.find((obj) => obj.title === movie.title);
      if (favMovie) return alert(`Film Sudah ditambahkan`);

      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  return (
    <>
      <Layout>
        <div className="w-full flex flex-col">
          <p className="text-center my-10 p-1 font-bold text-lg text-white">{title}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {loading
              ? skeleton.map((item) => <Loading key={item} />)
              : datas.map((data) => <Card key={data.id} image={data.poster_path} title={data.title} judul={data.title} onNavigate={() => props.navigate(`/detail/${data.id}`)} addFavorite={() => handleFav(data)} />)}
            <p></p>
          </div>
          <div className="flex justify-center">
            <ButtonSecondary className="w-96" label="Load More" onClick={() => fetchData()} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default WithRouter(Home);
