import React, { Component } from "react";
import { ButtonPrimary } from "./Button";

class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border border-red-700 m-2 bg-white">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        <p className="text-center">{this.props.title}</p>
        <ButtonPrimary label={`Add Favorite`} />
      </div>
    );
  }
}

export default Card;
