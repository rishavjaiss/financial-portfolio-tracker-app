import React from "react";

const MyStocksHeader = (props) => {
  return (
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
  );
};
export default MyStocksHeader;
