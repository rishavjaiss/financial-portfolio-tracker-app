import React, { Component } from "react";
import "./Modal.css";
import Axios from "axios";

class Modal extends Component {
  // state = {
  //   symbol: this.props.symbol,
  //   name: this.props.name,
  // };
  putRequest = () => {
    // Axios.put("https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json", {
    //     symbol: this.state.stock.symbol,
    //     name: this.state.stock.name,
    //     isUser:false,
    //   }
    // });
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <button className="close">&times;</button>
            <h1>Add {this.props.selectedStock?.name} to my stocks</h1>
            <button onClick={this.putRequest}>Add</button>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
