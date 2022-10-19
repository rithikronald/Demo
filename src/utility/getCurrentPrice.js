import axios from "axios";
import React from "react";

const host = "http://api.gateio.ws/api/v4/spot/tickers?currency_pair=";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getCurrentPrice = (ticker) => {
  const url = `${host}${ticker}_USDT`;
  console.log("URL", url);
  axios
    .get(url,{
        headers
    })
    .then((res) => {
      console.log("GET CURRENT PRICE", res);
    })
    .catch((e) => console.log("Error", e));
};
