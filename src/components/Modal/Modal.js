import React, { Component } from "react";
import "./Modal.css";
import Axios from "axios";

class Modal extends Component {
  putRequest = (stock) => {
    let shares = document.getElementById("noShares").value;
    let buyprice = document.getElementById("buyPrice").value;
    let buydate = document.getElementById("buyDate").textContent;

    if (shares > 0 && buyprice > 0) {
      Axios.put(
        `https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks/` +
          this.props.selectedStock.symbol +
          `.json`,
        {
          symbol: this.props.selectedStock.symbol,
          name: this.props.selectedStock.name,
          isUser: true,
          shares: shares,
          buyprice: buyprice,
          buydate: buydate,
        }
      )
        .then(() => this.props.updateStocks())
        .then(() => this.props.toggle());
    } else {
      alert("Please fill all the fields!");
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    let today = new Date();
    let buyDate =
      today.getDate() - +0 + today.getMonth() + 1 - today.getFullYear();
    return (
      <>
        <div className="AddStockForm">
          <div className="modal-content">
            <span className="close" onClick={() => this.props.toggle()}>
              &times;
            </span>
            <h1>Add {this.props.selectedStock?.name} to my stocks</h1>
            <div>
              <span className="modal-label">Company Name :</span>
              <span className="modal-value">
                {this.props.selectedStock?.name}
              </span>
            </div>
            <br></br>
            <br></br>
            <div>
              <span className="modal-label">No. of Shares :</span>
              <input
                id="noShares"
                type="number"
                className="modal-value"
                min="1"
                placeholder="No. of shares"
              ></input>
            </div>
            <br></br>
            <br></br>
            <div>
              <span className="modal-label">Buy Price :</span>
              <div className="modal-value">
                <strong>&#8377;</strong>&nbsp;
                <input
                  id="buyPrice"
                  type="number"
                  min="1"
                  placeholder="Buy Price"
                ></input>
              </div>
            </div>
            <br></br>
            <br></br>
            <div>
              <span className="modal-label">Buy Date :</span>
              <input id="buyDate" className="modal-value"></input>
            </div>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
              <button
                id="modaladdbtn"
                className="AddButton"
                onClick={this.putRequest.bind(this, this.props.selectedStock)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
