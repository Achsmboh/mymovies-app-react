import React, { Component } from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";

export class ListFavoriteMoviesPage extends Component {
  // ---=== CONSTRUCTOR START ===---
  state = {
    title: "Your Favorite",
    datas: [],
    loading: true,
  };
  // ---=== CONSTRUCTOR START ===---

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    let dataTemp = [];
    for (let i = 0; i < 5; i++) {
      const temp = {
        id: i + 1,
        title: `FILM TITLE #${i + 1}`,
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
      };
      dataTemp.push(temp);
    }
    this.setState({ datas: dataTemp });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return (
      <Layout>
        <div>
          <p className="text-center my-10 p-1 font-bold text-lg">{this.state.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 font-bold">
            {this.state.datas.map((data) => (
              <Card key={data.id} image={data.image} title={data.title} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default ListFavoriteMoviesPage;
