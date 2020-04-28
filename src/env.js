//export const API_KEY = "K4C1OCSP489EZS33";
export const API_KEY = "5CF1O9FBXRKM2TA7";
export const stocksUrl =
  "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json";

export const getStockPriceApi = (symbol) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}&datatype=csv`;
