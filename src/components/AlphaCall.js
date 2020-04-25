import React, { Component } from "react";
import axios from "axios";
import MyStocks from "./MyStocks/MyStocks.js";
export default class AlphaCall extends Component {
  state = {
    alphacall: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=` +
          this.props.stockSymbol +
          `&apikey=K4C1OCSP489EZS33`
      )
      .then((res) =>
        this.setState(
          { alphacall: res.data["Time Series (Daily)"][this.props.buydate] },
          () => console.log(this.state.alphacall)
        )
      )
      .catch((error) => {
        console.log(error);
        alert("Problem with the server.");
      });
  }

  render() {
    let profit =
      (this.props.buyprice - this.state.alphacall.close) * this.props.shares;
    return (
      <>
        <MyStocks price={this.state.alphacall.close} profit={profit} />;
      </>
    );
  }
}
