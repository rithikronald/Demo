import axios from "axios";
import { useEffect, useState } from "react";
import { ws } from "../../setup";
import { GradientContainer } from "../GradientContainer";
import { Tabs } from "../Tabs";
import { ThemeButton } from "../themeButton";

const innertabsData = [
  {
    label: "Market",
  },
  {
    label: "Limit",
  },
];

export const BuySellModal = (props) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [tradeMode, setTradeMode] = useState("market");

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
      // if(methods != 'server.sign')
      // ws.close();
    };
    ws.onclose = function () {
      console.log("close");
    };
    ws.onerror = function (err) {
      console.log("error", err);
    };
  };
  const getBidPrice = (type) => {
    let bidQuote = []; // decimals strateg
    let decimals = currentPrice?.split(".")[1]; // console.log("decimals length", decimals?.length); // for (let index = 1; index <= decimals?.length; index++) { //   if (index === decimals.length - 1) { //     bidQuote?.push("1"); //   } else { //     bidQuote?.push("0"); //   } // } // // bidQuote.length = decimals.length; // console.log("0.".concat(bidQuote?.join(""))); // return bidQuote?.join("");
    // % strategy
    let bid = currentPrice * 0.002;
    let finalBid;
    // console.log(bid);
    switch (type) {
      case "buy":
        finalBid = (Number(currentPrice) + Number(bid)).toFixed(
          decimals?.length
        );
        console.log(finalBid);
        // return Number(currentPrice) + Number("0.".concat(bidQuote?.join("")));
        return finalBid;
      case "sell":
        finalBid = (Number(currentPrice) - Number(bid)).toFixed(
          decimals?.length
        );
        console.log(finalBid);
        // return Number(currentPrice) - Number("0.".concat(bidQuote?.join("")));
        return finalBid;
      default:
        break;
    }
  };

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
      price: tradeMode === "market" ? getBidPrice(props?.trade) : price,
      side: props?.trade,
      type: tradeMode,
    };
    axios
      .post(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/createOrder/QrUR3ejnnTY9mgTOLN4dqMwttVP2`,
        body
      )
      .then((response) => console.log("Response", response?.data))
      .catch((err) => console.log("Error", err));
  };

  const handlePriceInput = (e) => {
    if (tradeMode === "market") {
      setPrice(e.target.value);
      calculateAmount(e.target.value);
    }
    if (tradeMode === "limit") {
      setPrice(e.target.value);
    }
  };

  const handleAmountInput = (e) => {
    if (tradeMode === "market") {
      setAmount(e.target.value);
      calculatePrice(e.target.value);
    }
    if (tradeMode === "limit") {
      setAmount(e.target.value);
    }
  };

  const priceText = () => {
    if (tradeMode === "market") {
      switch (props?.trade) {
        case "buy":
          return "Investment price";
        case "sell":
          return "Withdrawal price";
      }
    }
    if (tradeMode === "limit") {
      return "Token price";
    }
  };

  useEffect(() => {
    console.log("isOpen", props?.isOpen);
    if (props?.isOpen === false) {
      setAmount("");
      setPrice("");
    }
  }, [props?.isOpen]);

  useEffect(() => {
    if (props?.ticker) {
      console.log("Ticker", props?.ticker);
      wsGet(Math.round(Math.random() * 1000), "ticker.subscribe", [
        props?.ticker + "_USDT",
      ]);
    }
  }, [props?.ticker]);

  useEffect(()=>{
    console.log("Price",currentPrice)
  },[currentPrice])

  return (
    <div className="flex items-center flex-col p-4 px-6 w-full h-full">
      <Tabs
        onClick={(val) => setTradeMode(val === 1 ? "limit" : "market")}
        data={innertabsData}
      />
      <div className="flex flex-col h-[90%] justify-center">
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">
            {priceText()}
          </p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                value={price}
                onChange={handlePriceInput}
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
                onChange={handleAmountInput}
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
