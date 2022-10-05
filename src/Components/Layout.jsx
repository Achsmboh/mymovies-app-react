import React, { Component } from "react";

export class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto bg-slate-600">
        <nav className="w-full p-4 bg-black sticky top-0 flex flex-col md:flex-row items-center">
          <h1 className="text-white font-bold text-lg">My Movie</h1>
        </nav>
        {this.props.children}
        <footer></footer>
      </div>
    );
  }
}

export default Layout;
