import React, { Component } from "react";
import "./AddStocks.css";
import Modal from "../Modal/Modal.js";
class AddStocks extends Component {
  state = {
    stockList: {},
    isModalVisible: false,
  };

  addStockHandler = (stock) => {
    let selectedStock = { ...stock };
    this.setState({
      isModalVisible: true,
      selectedStock,
    });
  };
  toggleModal = () => {
    // this.props.updateStock();
    this.setState({ isModalVisible: false });
  };

  createStockLIs = () => {
    let stockLIs = [];
    for (let stockKey in this.props.stocks) {
      const stock = this.props.stocks[stockKey];
      if (stock.isUser) {
        continue;
      }
      stockLIs.push(
        <li key={stock.symbol}>
          <button
            className="StockButton"
            id={stock.symbol}
            onClick={this.addStockHandler.bind(this, stock)}
          >
            {stock.symbol}
          </button>
          &nbsp;
          <span>{stock.name}</span>
          <br />
          <br />
        </li>
      );
    }
    return stockLIs;
  };
  render() {
    return (
      <div className="AddStocksTitle">
        <h2>Add stocks to my Stocks</h2>
        <ul>{this.createStockLIs()}</ul>
        <Modal
          show={this.state.isModalVisible}
          selectedStock={this.state.selectedStock}
          toggle={this.toggleModal}
        />
      </div>
    );
  }
}
export default AddStocks;
