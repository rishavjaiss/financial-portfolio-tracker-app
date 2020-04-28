import React, { Component } from "react";
import "./MyStocks.css";
import axios from "axios";
import MyStocksHeader from "./MyStocksHeader";
import MyStockRow from "./MyStockRow";
class MyStocks extends Component {
  createMyStockLIs = () => {
    const myStockArray = [];
    for (let stockKey in this.props.stocks) {
      const stock = this.props.stocks[stockKey];
      if (!stock.isUser) {
        continue;
      } else {
        myStockArray.push(stock);
      }
    }
    const stockLIs = myStockArray.map((stock) => (
      <MyStockRow
        key={stock.symbol}
        stock={stock}
        removeMyStock={this.handleDelete.bind(this, stock)}
      />
    ));
    return stockLIs;
  };
  handleDelete = (stock) => {
    axios
      .put(
        "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks/" +
          stock.symbol +
          ".json",
        {
          symbol: stock.symbol,
          name: stock.name,
          isUser: false,
        }
      )
      .then((res) => {
        console.log(res.data);
        this.props.updateStocks();
      });
  };

  render() {
    return (
      <div className="MyStocks">
        <h2>My Stocks</h2>
        <table>
          <MyStocksHeader />
          <tbody>{this.createMyStockLIs()}</tbody>
        </table>
      </div>
    );
  }
}

export default MyStocks;
