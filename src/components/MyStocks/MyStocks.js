import React, { Component } from "react";
import "./MyStocks.css";
import axios from "axios";
class MyStocks extends Component {
  state = {
    currentValue: [],
  };

  createMyStockLIs = () => {
    var stockLIs = [];
    for (let stockKey in this.props.stocks) {
      const stock = this.props.stocks[stockKey];
      if (!stock.isUser) {
        continue;
      } else {
        stockLIs.push(
          <tr key={stock.symbol}>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>{stock.shares}</td>
            <td>{stock.buyprice}</td>
            <td>{this.getCurrentPrice(stock.symbol)}</td>
            <td>{this.props.profit}</td>
            <td>
              <button
                className="StopTrackingBtn"
                id={stock.symbol}
                onClick={this.handleDelete.bind(this, stock)}
              >
                Stop Tracking
              </button>
            </td>
          </tr>
        );
      }
    }
    return stockLIs;
  };
  handleDelete = (stock) => {
    axios.put(
      "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks/" +
        stock.symbol +
        ".json",
      {
        symbol: stock.symbol,
        name: stock.name,
        isUser: false,
      }
    );
  };
  getCurrentPrice = (symbol) => {
    var API_KEY = "5CF1O9FBXRKM2TA7";
    var stocksUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${"MSFT"}&apikey=${API_KEY}&datatype=csv`;
    fetch(stocksUrl)
      .then((res) => res.text())
      .then((res) => {
        debugger;
        this.setState(
          {
            currentValue: res.text().data.split("\n")[1].split(",")[4],
          },
          () => console.log(this.state.currentValue)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    debugger;
  };

  render() {
    return (
      <div className="MyStocks">
        <h2>My Stocks</h2>
        <table>
          <thead>
            <tr>
              <th>Stock Symbol</th>
              <th>Stock Name</th>
              <th>No. Of Shares</th>
              <th>Buy Price</th>
              <th>Current Price</th>
              <th>Profit/Loss</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.createMyStockLIs()}</tbody>
        </table>
      </div>
    );
  }
}

export default MyStocks;
