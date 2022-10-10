import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Routes";
import DetailMovie from "./Pages/DetailMovie";
import ListFavoriteMoviesPage from "./Pages/ListFavoriteMoviesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
