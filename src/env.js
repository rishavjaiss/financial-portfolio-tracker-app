export const API_KEY = "YOUR_API_KEY";
export const stocksUrl =
  "https://financial-portfolio-trac-73f3e.firebaseio.com/addStocks.json";

export const getStockPriceApi = (symbol) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}&datatype=csv`;
