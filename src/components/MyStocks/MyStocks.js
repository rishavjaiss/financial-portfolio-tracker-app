import React, { Component } from "react";
import "./MyStocks.css";
import axios from "axios";
class MyStocks extends Component {
  state = {
    myStocks: [],
    apicall: [],
  };

  handleDelete = (event) => {
    console.log(event.target.id);

    // axios.delete(
    //   `https://financial-portfolio-trac-73f3e.firebaseio.com/myStocks/${id}.json`
    // );

    // axios.post(
    //   "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json",
    //   {
    //     symbol: this.state.myStocks[id].symbol,
    //     name: this.state.myStocks[id].name,
    //   }
    // );
  };

  componentDidMount() {
    axios
      .get(
        `https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json`
      )
      .then((myStocks) => {
        this.setState({ myStocks: myStocks.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUpdate() {
    console.log("Axios Fetched");
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
          <tbody>
            {this.state.myStocks.map((item, index) => (
              <tr key={index}>
                <td>{item.symbol}</td>
                <td>{item.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="StopTrackingBtn"
                    id={index}
                    onClick={this.handleDelete}
                  >
                    Stop Tracking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyStocks;
