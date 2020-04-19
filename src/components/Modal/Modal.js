import React, { Component } from "react";
import "./Modal.css";
import Axios from "axios";

class Modal extends Component {
  putRequest = (stock) => {
    let shares = document.getElementById("shares").value;
    let buyprice = document.getElementById("buyprice").value;
    let buydate = document.getElementById("buydate").textContent;

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
      );
      this.props.showChange();
    } else {
      alert("Please fill all the fields!");
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    let today = new Date();
    // if (today.getDay() === "0" || "6") {
    //   return alert("You can't add stocks on weekend");
    // }
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => this.props.showChange()}>
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
                id="shares"
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
                  id="buyprice"
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
              <span id="buydate" className="modal-value">
                {today.getFullYear()}-0{today.getMonth() + 1}-{today.getDate()}
              </span>
            </div>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
              <button
                className="modaladdbtn"
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
