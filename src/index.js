import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/Navbar/Navbar";
import MyStocks from "./components/MyStocks/MyStocks";
import AddStocks from "./components/AddStocks/AddStocks";
import HorizontalLine from "./components/Horizontal Line/HorizontalLine";

// import Axios from "./components/Axios";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <MyStocks />
    <HorizontalLine />
    <AddStocks />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
