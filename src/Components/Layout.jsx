import React, { Component } from "react";
import { ButtonPrimary /*ButtonSecondary*/ } from "./Button";
// import { FcClapperboard } from "react-icons/fc";
import { Link } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto bg-slate-600">
        <nav className="w-full p-4 bg-black sticky top-0 flex flex-col md:flex-row justify-between items-center">
          <Link to="/">
            <h1 className="text-white font-bold text-lg">My Movie</h1>
          </Link>

          <div className="flex justify-around items-center">
            <Link to="/ListFavoriteMoviesPage">
              <ButtonPrimary label={"Favorit"} />
            </Link>

            {/* <ButtonSecondary label={"SandBox"} />
            <FcClapperboard className=" h-10 w-20" /> */}
          </div>
        </nav>
        {this.props.children}
        <footer></footer>
      </div>
    );
  }
}

export default Layout;
