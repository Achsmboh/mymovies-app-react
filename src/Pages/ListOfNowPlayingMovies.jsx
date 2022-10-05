import React, { Component } from "react";
import Layout from "../Components/Layout";
import "../Styles/App.css";

import axios from "axios";
import Card from "../Components/Card";
import { ButtonSecondary } from "../Components/Button";

class Home extends Component {
  // ---=== CONSTRUCTOR START ===---
  state = {
    title: "NOW PLAYING",
    datas: [],
    loading: true,
    page: 1,
  };
  // ---=== CONSTRUCTOR START ===---

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD_KEY}&page=${this.state.page}`)
      .then((res) => {
        const { results } = res.data;
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ data: results, page: newPage });
        this.setState({ datas: temp });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        <Layout>
          <div>
            <p className="text-center my-10 p-1 font-bold text-lg text-white">{this.state.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
              {/* <Card /> */}
              {this.state.datas.map((data) => (
                <Card key={data.id} image={data.poster_path} title={data.title} judul={data.title} />
              ))}
              <p></p>
            </div>
            <div className="flex justify-center">
              <ButtonSecondary label="Learn More" onClick={() => this.fetchData()} />
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Home;
