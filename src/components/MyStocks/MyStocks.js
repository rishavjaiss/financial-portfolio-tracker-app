import React, { Component } from "react";
import "./MyStocks.css";
import axios from "axios";
import AlphaCall from "../AlphaCall.js";
class MyStocks extends Component {
  state = {
    stockList: {},
  };
  createMyStockLIs = () => {
    let stockLIs = [];
    for (let stockKey in this.state.stockList) {
      const stock = this.state.stockList[stockKey];
      if (!stock.isUser) {
        continue;
      }
      stockLIs.push(
        <tr key={stock.symbol}>
          <td>{stock.symbol}</td>
          <td>{stock.name}</td>
          <td>{stock.shares}</td>
          <td>{stock.buyprice}</td>
          <td></td>
          <td></td>
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
  componentDidUpdate() {
    axios
      .get(
        `https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks/.json`
      )
      .then((res) => {
        this.setState({ stockList: res.data }, () => (
          <AlphaCall
            stocks={this.state.stockList.symbol}
            date={this.state.stockList.buydate}
          />
        ));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get(
        `https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks/.json`
      )
      .then((res) => {
        this.setState({ stockList: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
