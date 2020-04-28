import React from "react";
import { getStockPriceApi } from "../../env";

const MyStockRow = (props) => {
  const [currentPrice, setPrice] = React.useState(0);
  const { stock, removeMyStock } = props;
  const getCurrentPrice = (symbol) => {
    var stocksUrl = getStockPriceApi(symbol);
    fetch(stocksUrl)
      .then((res) => {
        debugger;
        return res.text();
      })
      .then((res) => {
        const currentPrice = parseFloat(res.split("\n")[1].split(",")[4]);
        setPrice(isNaN(currentPrice) ? 0 : currentPrice.toFixed(2));
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  };
  React.useEffect(() => {
    getCurrentPrice(stock.symbol);
  }, [stock.symbol]);
  const getProfit = (buyPrice, noOfShares) => {
    const buyPriceFloat = isNaN(parseFloat(buyPrice))
      ? 0
      : parseFloat(buyPrice);
    const number = isNaN(parseFloat(noOfShares)) ? 0 : parseFloat(noOfShares);
    const change = currentPrice * number - buyPriceFloat * number;
    return change;
  };
  return (
    <tr key={stock.symbol}>
      <td>{stock.symbol}</td>
      <td>{stock.name}</td>
      <td>{stock.shares}</td>
      <td>{stock.buyprice}</td>
      <td>{currentPrice}</td>
      <td>{getProfit(stock.buyprice, stock.shares)}</td>
      <td>
        <button
          className="StopTrackingBtn"
          id={stock.symbol}
          onClick={removeMyStock}
        >
          Stop Tracking
        </button>
      </td>
    </tr>
  );
};
export default MyStockRow;
