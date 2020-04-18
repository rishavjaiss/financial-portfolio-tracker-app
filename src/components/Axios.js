import React, { Component } from "react";
import axios from "axios";
import "../App.css";
class Axios extends Component {
  state = {
    value: [],
    count: 0,
  };
  componentDidMount() {
    axios
      .get(
        // `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=K4C1OCSP489EZS33`
        // "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json"
        "https://financial-portfolio-trac-73f3e.firebaseio.com/myStocks.json"
      )
      .then((res) => {
        this.setState({ value: res.data }, () => console.log(this.state.value));
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <div className="App">
          <ul>
            {this.state.value.map((val) => (
              <li>
                {val.symbol} : {val.name}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Axios;
