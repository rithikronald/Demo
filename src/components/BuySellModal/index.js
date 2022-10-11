import axios from "axios";
import { useEffect, useState } from "react";
import { maximumInstance } from "../../setup";
import { Tabs } from "../../views/CoinList";
import { GradientContainer } from "../GradientContainer";
import { ThemeButton } from "../themeButton";

const innertabsData = [
  {
    label: "Limit",
  },
  {
    label: "Market",
  },
];

export const BuySellModal = (props) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [tradeMode, setTradeMode] = useState("limit");
  var WebSocketClient = require("websocket").w3cwebsocket;
  const WS_URL = "wss://ws.gate.io/v3/";
  var ws = new WebSocketClient(WS_URL);

  useEffect(() => {
    console.log("Trade", props?.trade);
    console.log("TradeMode", tradeMode);
  }, [props?.trade, tradeMode]);

  const wsGet = (id, method, params) => {
    ws.onopen = function () {
      console.log("open");
      var array = JSON.stringify({
        id: id,
        method: method,
        params: params,
      });
      ws.send(array);
    };
    ws.onmessage = function (evt) {
      const data = JSON.parse(evt?.data);
      const coinName = data?.params?.[0].toString().split("_")[0];
      if (coinName) {
        setCurrentPrice(data?.params?.[1]?.last);
      }
    };
    ws.onclose = function () {
      console.log("close");
    };
    ws.onerror = function (err) {
      console.log("error", err);
    };
  };
  const getBidPrice = (type) => {};

  useEffect(() => {
    if (props?.ticker) {
      console.log("Ticker", props?.ticker);
      wsGet(Math.round(Math.random() * 1000), "ticker.subscribe", [
        props?.ticker + "_USDT",
      ]);
    }
  }, [props?.ticker]);

  const calculatePrice = (val) => {
    const value = Number(val) * currentPrice;
    setPrice(value);
  };

  const calculateAmount = (val) => {
    const value = Number(val) / currentPrice;
    setAmount(value.toFixed(3));
  };

  const createOrder = () => {
    let body = {
      text: "t-123",
      currency_pair: `${props?.ticker}_USDT`,
      amount: amount,
      price:
        props?.trade == "buy"
          ? `${Number(currentPrice) + 0.001}`
          : `${Number(currentPrice) - 0.001}`,
      side: props?.trade,
    };
    axios
      .post(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/createOrder/QrUR3ejnnTY9mgTOLN4dqMwttVP2`,
        body
      )
      .then((response) => console.log("Response", response?.data))
      .catch((err) => console.log("Error", err));
  };

  return (
    <div className="flex items-center flex-col p-4 px-6 w-full h-full">
      <Tabs
        onClick={(val) => setTradeMode(val === 0 ? "limit" : "market")}
        data={innertabsData}
      />
      ;
      <div className="flex flex-col h-[90%] justify-center">
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Price</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  calculateAmount(e.target.value);
                }}
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Amount</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  calculatePrice(e.target.value);
                }}
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div>
        {/* <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Total</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div> */}
      </div>
      <ThemeButton
        onClick={createOrder}
        text="Trade"
        className="w-[75%] mt-10"
      />
    </div>
  );
};
