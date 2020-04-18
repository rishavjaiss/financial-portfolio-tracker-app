import React, { Component } from "react";
import axios from "axios";
import "./AddStocks.css";
import Modal from "../Modal/Modal.js";
class AddStocks extends Component {
  state = {
    addStocks: [],
    modal: false,
  };
  addStock = (event) => {
    this.setState({ modal: this.state.modal });
  };
  componentDidMount() {
    axios
      .get(
        `https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json`
      )
      .then((res) => {
        this.setState({ addStocks: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="AddStocksTitle">
        <h2>Add stocks to my Stocks</h2>
        <ul>
          {this.state.addStocks.map((addbtn, index) => (
            <li key={index}>
              <button
                className="StockButton"
                id={index}
                onClick={this.addStock}
              >
                {addbtn.symbol}
              </button>
              &nbsp;
              <span>{addbtn.name}</span>
              <br />
              <br />
            </li>
          ))}
        </ul>
        {this.state.modal === true ? <Modal /> : null}
      </div>
    );
  }
}
export default AddStocks;
