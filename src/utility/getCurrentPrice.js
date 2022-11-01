import axios from "axios";
import React from "react";

// const host = "http://api.gateio.ws/api/v4/spot/tickers?currency_pair=";
const hostv2 = "https://data.gateapi.io/api2/1/ticker/";

export const getCurrentPrice = async (ticker) => {
  let response;
  // const url = `${host}${ticker}_USDT`;
  console.log("URL", hostv2 + ticker.toLowerCase() + "_usdt");
  response = await axios
    .get(hostv2 + ticker.toLowerCase() + "_usdt")
    .then((res) => {
      return { coinName: ticker + "_USDT", price: res?.data?.last };
    })
    .catch((e) => console.log("Error", e));
  return response;
};
