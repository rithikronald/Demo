import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ws } from "../../App";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { getCurrentPrice } from "../../utility/getCurrentPrice";
import { GradientContainer } from "../GradientContainer";
import { Tabs } from "../Tabs";
import { ThemeButton } from "../themeButton/themeButtonWithLoader";

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

  function onmessage(evt) {
    const data = JSON.parse(evt?.data);
    console.log("Buy/Sell", data?.result?.currency_pair, data?.result?.last);
    const coinName = data?.result?.currency_pair?.split("_")[0];
    if (coinName && coinName === props?.ticker) {
      setCurrentPrice(data?.result?.last);
    }
  }

  useEffect(() => {
    getCurrentPrice(props?.ticker)
      .then((res) => {
        setCurrentPrice(res?.price);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  useEffect(() => {
    var array = JSON.stringify({
      time: new Date().getTime,
      channel: "spot.tickers",
      event: "subscribe",
      payload: [`${props?.ticker}_USDT`],
    });
    if (ws.readyState) {
      console.log("Buy/Sell Sub");
      ws.send(array);
      ws.onmessage = onmessage;
    }
  }, []);

  // return () => {
  //   var array = JSON.stringify({
  //     time: new Date().getTime,
  //     channel: "spot.tickers",
  //     event: "unsubscribe",
  //     payload: [`${props?.ticker}_USDT`],
  //   });
  //   if (ws.readyState) {
  //     console.log("Buy/Sell Un Sub");
  //     ws.send(array);
  //   }
  // };

  // useEffect(() => {
  //   if (props?.isOpen == false) {
  //     var array = JSON.stringify({
  //       time: new Date().getTime,
  //       channel: "spot.tickers",
  //       event: "unsubscribe",
  //       payload: [`${props?.ticker}_USDT`],
  //     });
  //     if (ws.readyState) {
  //       console.log("Buy/Sell Un Sub");
  //       ws.send(array);
  //     }
  //   }
  // }, [props?.isOpen]);

  const getBidPrice = (type) => {
    let bidQuote = []; // decimals strateg
    let decimals = currentPrice?.split(".")[1]; // console.log("decimals length", decimals?.length); // for (let index = 1; index <= decimals?.length; index++) { //   if (index === decimals.length - 1) { //     bidQuote?.push("1"); //   } else { //     bidQuote?.push("0"); //   } // } // // bidQuote.length = decimals.length; // console.log("0.".concat(bidQuote?.join(""))); // return bidQuote?.join("");
    // % strategy
    let bid = currentPrice * 0.001;
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

  const calculatePrice = (amount) => {
    const value = Number(amount) * currentPrice;
    setPrice(value.toFixed(4));
  };

  const calculateAmount = (price) => {
    if (currentPrice) {
      const value = Number(price) / currentPrice;
      setAmount(value.toFixed(3));
    }
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
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/createOrder/${localStorage.getItem('uid')}`,
        body
      )
      .then((response) => {
        console.log("Response", response?.data);
        switch (response?.data?.status) {
          case "closed":
            setAmount("");
            setPrice("");
            toast.success("order successful", {
              position: toast.POSITION.TOP_RIGHT,
            });
            break;
          case "open":
            toast.success("order created - open", {
              position: toast.POSITION.TOP_RIGHT,
            });
            break;
          case "cancelled":
            toast.warn("order cancelled - try again", {
              position: toast.POSITION.TOP_RIGHT,
            });
            break;
          default:
            break;
        }
      })
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

  return (
    <div className="flex items-center flex-col p-4 px-6 w-full h-full">
      <ToastContainer hideProgressBar autoClose={3000} closeOnClick />
      <Tabs
        onClick={(val) => setTradeMode(val === 1 ? "limit" : "market")}
        data={innertabsData}
      />
      <div className="flex flex-col h-[90%] w-[96%] justify-center">
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">
            {priceText()}
          </p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <div className="w-full px-2 h-full flex items-center justify-center">
                <img
                  alt="usdt"
                  className="h-8 w-9 m-1"
                  src={require("../../../src/assets/usdt.png")}
                />
                <input
                  type="text"
                  value={price}
                  onChange={handlePriceInput}
                  // onKeyPress={(event) => {
                  //   if (!/[0-9]/.test(event.key)) {
                  //     event.preventDefault();
                  //   }
                  // }}
                  className="h-full w-full border-0 focus:outline-none bg-transparent text-white text-2xl rounded-2xl text-center form-control"
                />
              </div>
            }
          />
        </div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Amount</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <div className="w-full px-2 h-full flex items-center justify-center">
                <img
                  alt="usdt"
                  className="h-8 w-9 m-1 rounded-full bg-white"
                  src={getCoinMeta(props?.ticker)?.logoUrl}
                />
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountInput}
                  // onKeyPress={(event) => {
                  //   if (!/[0-9]/.test(event.key)) {
                  //     event.preventDefault();
                  //   }
                  // }}
                  className="h-full w-full border-0 focus:outline-none bg-transparent text-white text-2xl rounded-2xl text-center form-control "
                />
              </div>
            }
          />
        </div>
      </div>
      <ThemeButton
        onClick={createOrder}
        text={props?.trade?.charAt(0).toUpperCase() + props?.trade?.slice(1)}
        className="w-[75%] mt-10"
      />
    </div>
  );
};
