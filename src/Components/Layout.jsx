import React, { Component } from "react";

export class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto bg-yellow-50">
        <nav className="w-ful p-4 bg-black sticky top-0 flex flex-col md:flex-row gap 2 items-center justify-between">
          <h1 className="text-white font-bold text-lg">My Movie</h1>
        </nav>
        {this.props.children}
        <footer></footer>
      </div>
    );
  }
}

export default Layout;
