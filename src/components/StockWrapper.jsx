import React from "react";
import axios from "axios";
import MyStocks from "./MyStocks/MyStocks";
import AddStocks from "./AddStocks/AddStocks";
import { stocksUrl } from "../env";
import HorizontalLine from "./Horizontal Line/HorizontalLine";

const StockWrapper = (props) => {
  const [stocks, setStocks] = React.useState([]);
  const [fetchStocks, setFetchStocks] = React.useState(0);

  React.useEffect(() => {
    axios
      .get(stocksUrl)
      .then((res) => {
        setStocks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchStocks]);

  return (
    <>
      <MyStocks
        updateStocks={() => setFetchStocks((s) => s + 1)}
        stocks={stocks}
      />
      <HorizontalLine />
      <AddStocks
        updateStocks={() => setFetchStocks((s) => s + 1)}
        stocks={stocks}
      />
    </>
  );
};

export default StockWrapper;
