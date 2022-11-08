import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { maximumInstance, ws } from "../../App";
import { CustomPieChart } from "../../components/Charts/CustomPieChart";
import { Deopsite } from "../../components/Deposite";
import { GradientContainer } from "../../components/GradientContainer";
import { pieColors } from "../../constants/constants";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { getCurrentPrice } from "../../utility/getCurrentPrice";
import { TransactionModal } from "./popovers";
import "./style.css";

const TransactionSummary = () => {
  const location = useLocation();
  const [currentPrice, setCurrentPrice] = useState({});
  const [status, setStatus] = useState({});
  const [split, setSplit] = useState({});
  const [balance, setBalance] = useState(0);
  const [buyPrice, setBuyPrice] = useState(location?.state?.amount || 0);
  const [isOpen, setisOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionSummary, setTransactionSummary] = useState([]);
  // const transactionSummary = [];

  const socketPayload = location?.state?.indexData?.coins?.map(
    (ticker) => `${ticker}_USDT`
  );

  function onmessage(evt) {
    const data = JSON.parse(evt?.data);
    const coinName = data?.result?.currency_pair;
    // console.log(coinName, data?.result?.last);
    if (coinName) {
      setCurrentPrice((prev) => {
        return {
          ...prev,
          [coinName]: data?.result?.last,
        };
      });
    }
  }

  const getCoinPrice = async (arr) => {
    let tempArr = [];
    arr?.map((item, index) => {
      getCurrentPrice(item)
        .then((res) => {
          setCurrentPrice((prev) => {
            return {
              ...prev,
              [res?.coinName]: res?.price,
            };
          });
        })
        .catch((err) => console.log("Error", err));
    });
    return tempArr;
  };

  useEffect(() => {
    getCoinPrice(location?.state?.indexData?.coins)
      .then((res) => {
        setCurrentPrice(res);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  const storeIndexTransaction = () => {
    maximumInstance
      .post(`/storeIndexTransactions/${localStorage?.getItem("uid")}`, {
        transactionSummary: transactionSummary,
        timestamp: Date.now(),
        indexName: location?.state?.indexData?.basketName,
        totalAmount: buyPrice,
      })
      .then((res) => {
        console.log("IndexTransaction", res?.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    return () => {
      setCurrentPrice({});
      setStatus({});
    };
  }, []);

  useEffect(() => {
    if (socketPayload) {
      var array = JSON.stringify({
        time: new Date().getTime,
        channel: "spot.tickers",
        event: "subscribe",
        payload: socketPayload,
        // payload: [`${location?.state?.coin}_USDT`],
      });
      if (ws.readyState) {
        console.log("indexDesc Sub");
        ws.send(array);
        ws.onmessage = onmessage;
      }
    }

    return () => {
      var array = JSON.stringify({
        time: new Date().getTime,
        channel: "spot.tickers",
        event: "unsubscribe",
        payload: socketPayload,
      });
      if (ws.readyState) {
        console.log("indexDesc Un Sub");
        ws.send(array);
      }
    };
  }, [ws.readyState]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/listSpotAssets/${localStorage.getItem(
          "uid"
        )}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const bal = response?.data?.find((o) => o.currency === "USDT");
        setBalance(Number(bal?.available).toFixed(2));
      })
      .catch((e) => console.log("Error", e));
  }, []);

  useEffect(() => {
    console.log("status", status);
  }, [status]);

  const getBidPrice = (type, currentPrice) => {
    let decimals = currentPrice?.split(".")[1]; // console.log("decimals length", decimals?.length); // for (let index = 1; index <= decimals?.length; index++) { //   if (index === decimals.length - 1) { //     bidQuote?.push("1"); //   } else { //     bidQuote?.push("0"); //   } // } // // bidQuote.length = decimals.length; // console.log("0.".concat(bidQuote?.join(""))); // return bidQuote?.join("");
    // % strategy
    let bid = currentPrice * 0.0005;
    let finalBid;
    // console.log(bid);
    switch (type) {
      case "buy":
        finalBid = (Number(currentPrice) + Number(bid)).toFixed(
          decimals?.length
        );
        // return Number(currentPrice) + Number("0.".concat(bidQuote?.join("")));
        return finalBid;
      case "sell":
        finalBid = (Number(currentPrice) - Number(bid)).toFixed(
          decimals?.length
        );
        // return Number(currentPrice) - Number("0.".concat(bidQuote?.join("")));
        return finalBid;
      default:
        break;
    }
  };

  const calculateSplit = () => {
    let totalCoins = socketPayload.length;
    let individualSplit = buyPrice / totalCoins;
    socketPayload.map((item) => {
      let value = Number(individualSplit) / currentPrice[item];
      setSplit((prev) => {
        return {
          ...prev,
          [item]: value.toFixed(3),
        };
      });
    });
  };

  useEffect(() => {
    calculateSplit();
  }, [buyPrice, currentPrice]);

  const createBatchOrder = async () => {
    setIsLoading(true);
    await socketPayload.map(async (item, index) => {
      createOrder({
        currency_pair: item,
        amount: split[item],
        current_price: getBidPrice("buy", currentPrice[item]),
      });
    });
    setFirstRequest(true);
  };

  const retryOrders = async () => {
    // calculateSplit();
    // console.log("split -", split);
    for (let key in status) {
      if (status[key] !== "closed") {
        console.log("retrying ....", key, status[key]);
        await createOrder({
          currency_pair: key,
          amount: split[key],
          current_price: getBidPrice("buy", currentPrice[key]),
        });
      }
    }
    return "retry done";
  };

  const createOrder = async ({ currency_pair, amount, current_price }) => {
    let body = {
      text: "t-123",
      currency_pair: currency_pair,
      amount: amount,
      price: getBidPrice("buy", current_price),
      side: "buy",
      type: "market",
    };
    await axios
      .post(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/createOrder/${localStorage.getItem(
          "uid"
        )}`,
        body
      )
      .then((response) => {
        console.log(`response of ${currency_pair}`, response?.data);
        setStatus((prev) => {
          return {
            ...prev,
            [currency_pair]: response?.data?.status,
          };
        });

        if (response?.data?.status == "closed") {
          setCounter((prev) => prev + 1);
          setTransactionSummary((prev) => {
            return [
              ...prev,
              {
                status: response?.data?.status,
                amount: response?.data?.amount,
                currency_pair: currency_pair,
                fill_price: response?.data?.fill_price,
              },
            ];
          });
        }
        return response?.data;
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    console.log("length", Object.keys(status).length, socketPayload.length);
    if (Object.keys(status).length == socketPayload.length) {
      setisOpen(true);
      setIsLoading(false);
      // setBuyPrice("");
    }
    if (socketPayload.length == counter) {
      storeIndexTransaction();
    }
  }, [counter, status]);

  const [inputTouched, setInputTouched] = useState(false);
  const [firstRequest, setFirstRequest] = useState(false);
  const [requestStatus, setRequestStatus] = useState(
    location?.state?.indexData?.coins?.map(() => false)
  );

  return (
    <div className="TransactionSummary bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont">
      {isOpen && (
        <TransactionModal
          isOpen={(val) => setisOpen(val)}
          failedCounter={socketPayload.length - counter}
          retry={retryOrders}
          status={socketPayload.length > counter ? false : true}
        />
      )}
      <div className="Left bg-yellow-40  p-8 px-14 flex flex-col justify-center items-center overflow-y-scroll sm:flex xl:basis-3/4">
        <p className="text-2xl 2xl:text-2xl 3xl:text-5xl font-semibold text-white font-mont">
          Transaction Summary
        </p>
        <div className="flex w-[80%] mt-[5%]">
          <p className="text-white font-medium">Composition Breakdown</p>
        </div>
        <GradientContainer
          width="w-[80%]"
          height="h-[50%]"
          className={"mt-2"}
          children={
            <div className="w-full h-full rounded-2xl flex flex-col">
              <div className="flex justify-center items-center">
                <p className="text-white font-mont text-xl font-semibold mt-3">
                  {location?.state?.indexData?.basketName}
                </p>
              </div>
              <div className="flex w-full h-[76%]">
                <div className="coin-list grid grid-cols-2 gap-2 w-[60%]  p-10 overflow-scroll">
                  {location?.state?.indexData?.coins?.map((item, index) => {
                    const data = getCoinMeta(item);
                    return (
                      <GradientContainer
                        className={"mt-4"}
                        children={
                          <div className="flex items-center p-2 w-[100%] rounded-2-xl h-full px-4 relative">
                            {firstRequest && (
                              <img
                                src={
                                  status[`${item}_USDT`] !== 400 &&
                                  status[`${item}_USDT`] !== "cancelled"
                                    ? require("../../assets/greenVerifiedIcon2.png")
                                    : require("../../assets/erroricon.png")
                                }
                                className="absolute right-2 h-[25px] w-[25px]"
                              />
                            )}
                            <img
                              alt="btc"
                              className="h-10 w-10 3xl:h-14 3xl:w-14 bg-white rounded-full"
                              src={data?.logoUrl}
                            />
                            <div className="pl-[6px]">
                              <p className="font-mont text-white text-[10px] 3xl:text-xl">
                                {data?.slug}
                              </p>
                              <div
                                className={`h-[6px] w-[${
                                  (
                                    100 /
                                    location?.state?.indexData?.coins.length
                                  ).toFixed(2) + 20
                                }px] rounded-lg bg-[${pieColors[index]}]`}
                              ></div>
                              <p className="font-semibold text-white text-sm 3xl:text-xl">
                                {data?.ticker}
                              </p>
                            </div>
                          </div>
                        }
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center items-center w-[40%]">
                  <CustomPieChart
                    data={location?.state?.indexData}
                    width={"100%"}
                    height={"100%"}
                  />
                  <div className="flex mt-3 items-center ml-5">
                    <p className="text-gray-400 text-sm font-medium w-[20%]">
                      Input Amount
                    </p>
                    <GradientContainer
                      height="h-14"
                      width="w-[60%]"
                      className={""}
                      children={
                        <div className="w-full h-full flex justify-center items-center px-2">
                          <p className="text-3xl text-white font-semibold">$</p>
                          <input
                            onChange={(e) => {
                              if (!inputTouched) {
                                setInputTouched(true);
                              }
                              setBuyPrice(e.target.value);
                            }}
                            value={buyPrice}
                            type="text"
                            className="h-full w-full bg-transparent font-semibold focus:outline-none text-white text-2xl rounded-2xl text-center form-control"
                          />
                        </div>
                      }
                    />
                  </div>
                  {inputTouched &&
                  parseFloat(buyPrice) <
                    location?.state?.indexData?.coins?.length * 10 + 5 ? (
                    <p className="w-full pl-[20px] mt-[10px] font-mont font-bold text-red-500 text-[14px]">
                      Minimum Input Amount is $
                      {location?.state?.indexData?.coins?.length * 10 + 5}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          }
        />
        <div className="w-[80%] h-[30%] rounded-2xl flex flex-col justify-center ">
          <div className="" onClick={retryOrders}>
            <p className="text-gray-400 text-sm font-medium">Order Number</p>
            <p className="font-semibold text-white text-xl">894ytiwnhiuyb8n</p>
          </div>
          <div className="mt-10">
            <p className="text-gray-400  text-sm font-medium">
              You have to pay
            </p>
            <div className="flex w-full justify-between">
              <div
                className="flex items-end"
                onClick={() => {
                  console.log("transactionSummary", transactionSummary);
                  console.log(currentPrice);
                }}
              >
                <p className="font-semibold text-white text-5xl">{buyPrice}</p>
                <p className="font-bold text-2xl text-gray-400 ml-3">USD</p>
              </div>
              <button
                // onClick={createBatchOrder}
                onClick={createBatchOrder}
                className="bg-primaryButton flex justify-center items-center font-mont text-white p-2 font-medium rounded-lg w-[200px] h-12 shadow-lg text-lg"
              >
                {isLoading ? (
                  <ScaleLoader height={20} color="#fff" />
                ) : (
                  "Pay Now"
                )}
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-[80%] mt-[50px]">
        <Table title={"Transactions"} data={[
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
        ]} />
        </div> */}
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-center items-center flex flex-col sm:hidden xl:flex"
      >
        <ToastContainer hideProgressBar autoClose={1000} closeOnClick />
        <Deopsite balance={balance} />
      </div>
    </div>
  );
};

export default TransactionSummary;
