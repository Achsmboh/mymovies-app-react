import React, { Component } from "react";
import Layout from "../Components/Layout";
import { ButtonPrimary } from "../Components/Button";

export class DetailMovie extends Component {
  render() {
    return (
      <Layout>
        <div className="lg:p-10">
          <div className="lg:rounded-lg grid md:grid-rows-3 md:grid-flow-col gap-5 items-center p-5 border border-red-700 shadow-lg bg-yellow-100">
            <div className="md:row-span-3 flex flex-col justify-center p-4 shadow-lg rounded-lg border border-red-700 m-2 bg-white">
              <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg" alt="" />
            </div>
            <div className="md:col-span-2">
              <h1 className="font-bold text-lg">Bat Man</h1>
            </div>
            <div className="md:row-span-2 md:col-span-2">
              <p>
                <strong>Runtime :</strong> 99 minuter
              </p>
              <p>
                <strong>Release date :</strong> Wednnesday, 27 July 2022
              </p>
              <p>
                <strong>Genre :</strong> Action
              </p>
              <p>
                <strong>Language :</strong>en
              </p>
              <p className="mb-5">
                <strong>Overview</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aperiam repellendus. Placeat ullam fugit voluptatum repudiandae, odit ea nostrum debitis cupiditate tempore rem culpa eius corrupti
                dolorum natus quisquam pariatur.
              </p>
              <ButtonPrimary label="Watch Now" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default DetailMovie;
