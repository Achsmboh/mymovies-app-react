import React, { Component } from "react";
import { ButtonPrimary } from "./Button";

class CardRemove extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center p-4 shadow-lg rounded-lg border border-red-700 m-2 bg-white">
        <div onClick={this.props.onNavigate} className="flex justify-center w-full h-full">
          <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt={this.props.title} />
        </div>

        <p className="text-center">{this.props.title}</p>
        <ButtonPrimary label={`Remove Favorite`} onClick={this.props.removeFavorite} />
      </div>
    );
  }
}

export default CardRemove;
