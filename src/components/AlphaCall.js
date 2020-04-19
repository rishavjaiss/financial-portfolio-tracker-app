import React, { Component } from "react";
import axios from "axios";

export default class AlphaCall extends Component {
  state = {
    alphacall: [],
  };
  render() {
    return axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=` +
          this.props.stocks +
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
      });
  }
}
