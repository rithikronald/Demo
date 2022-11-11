import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maximumInstance } from "../../App";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { Deopsite } from "../../components/Deposite";
import { GradientContainer } from "../../components/GradientContainer";
import { Tabs } from "../../components/Tabs";
import { Table } from "../../components/TransactionsHistoryTable";
import { Withdraw } from "../../components/Withdraw";
import { dummyChartData, indBgImgList } from "../../constants/constants";
import { arr, getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import types from "../../store/types";
import { numFormatter } from "../../utility/kFormatter";

import "./style.css";

var WebSocketClient = require("websocket").w3cwebsocket;
const WS_URL = "wss://ws.gate.io/v3/";

const tabsData = [
  {
    label: "Deposit",
  },
  {
    label: "Withdraw",
  },
];

var ws;

const WalletOverView = (props) => {
  const [coinList, setCoinList] = useState();
  const { height, width } = useWindowDimensions();
  const [ticker, setTicker] = useState(arr[0].ticker);
  const [currentCurrencyChain, setCurrentCurrencyChain] = useState([]);
  const [transactionMode, setTransactionMode] = useState(0);
  const [usdtSum, setUsdtSum] = useState();
  const [openIndex, setOpenIndex] = useState(-1);
  const [transactions, setTransactions] = useState();
  const [failed, setFailed] = useState(false);
  const [indexData, setIndexData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/getCurrencyChains/${ticker}`,
      method: "get",
    })
      .then((res) => {
        setCurrentCurrencyChain(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ticker]);

  useEffect(() => {
    maximumInstance
      .get(`/getIndexTransactions/${localStorage?.getItem("uid")}`)
      .then((res) => {
        console.log("IndexTransaction", res?.data);
        // setIndexData(res?.data);
        const transactions = [];
        for (let key in res?.data) {
          // const element = res?.data[key];
          transactions.push({ ...res?.data[key], key });
        }
        setIndexData(transactions);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  useEffect(() => {
    props.openLoader();
    setTicker(arr[0].ticker);
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
        setCoinList(response?.data);
        ws = new WebSocketClient(WS_URL);
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
              setCurrentPrice((prev) => {
                return {
                  ...prev,
                  [`${coinName}`]: data?.params?.[1]?.last,
                };
              });
            }
            // console.log("CURRENT PRICE", currentPrice);
          };
          ws.onclose = function () {
            console.log("close");
          };
          ws.onerror = function (err) {
            console.log("error", err);
          };
        };
        wsGet(
          Math.round(Math.random() * 1000),
          "ticker.subscribe",
          response?.data?.map((item) => `${item?.currency}_USDT`)
        );
        props?.closeLoader();
      })
      .catch((err) => console.log("error", err));

    // transaction history
    axios({
      url: `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/tradingHistory/${localStorage.getItem(
        "uid"
      )}`,
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setTransactions(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [refresh, setRefresh] = useState(0);
  const [showRefresh, setShowRefresh] = useState(true);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setShowRefresh(false);
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
        setBalance(bal?.available ? Number(bal?.available).toFixed(2) : 0);
        setShowRefresh(true);
      })
      .catch((e) => {
        console.log("Error", e);
        setShowRefresh(true);
      });
  }, [refresh]);

  const [currentPrice, setCurrentPrice] = useState({});

  const [availableBal, setAvailableBal] = useState(0);

  useEffect(() => {
    let sum = 0;
    let usdtSum = 0;
    coinList?.map((i) => {
      if (i.currency !== "USDT") {
        let first = i.available || 0;
        first = parseFloat(first);
        let second = currentPrice[i.currency] || 0;
        second = parseFloat(second);
        if (first && second) {
          sum = sum + first * second;
        }
      }
      if (i.currency === "USDT") {
        let first = i.available || 0;
        first = parseFloat(first);
        let second = 1;
        second = parseFloat(second);
        if (first && second) {
          usdtSum = usdtSum + first * second;
        }
      }
    });
    setAvailableBal(numFormatter(sum + usdtSum));
    setUsdtSum(usdtSum);
  }, [coinList, currentPrice]);

  useEffect(() => {
    console.log("indexData", indexData);
  }, [indexData]);

  return (
    <div className="WalletOverview bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont pl-[60px]">
      <div className="Left p-10 px-14 flex flex-col justify-around items-center overflow-y-hidden basis-3/4 h-[100%]">
        <div
          className={`overflow-y-scroll something ${
            width > 1440 ? "w-[80%]" : "w-full"
          }`}
        >
          <div className="flex flex-col w-full">
            <p className="text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-white">
              Wallet Overview
            </p>
            <GradientContainer
              width="w-full"
              height="h-[300px]"
              className={"mt-6"}
              children={
                <div className="w-full h-full rounded-2xl flex justify-between p-8 px-6">
                  <div className="flex h-full w-[40%] flex-col justify-between mr-8">
                    <div>
                      <p className="text-white text-sm font-medium">
                        Portfolio Balance
                      </p>
                      <p className="text-white font-semibold text-6xl mt-2">
                        <span className="text-white font-normal text-5xl">
                          $
                        </span>
                        {availableBal}
                      </p>
                    </div>
                    <div className="w-full flex flex-row gap-x-14 blur-sm">
                      <div className="w-1/2">
                        <p className="text-gray-400 font-medium text-[10px]">
                          Portfolio Change
                        </p>
                        <p className="text-white font-semibold text-3xl mt-2">
                          <span className="text-white font-normal text-xl">
                            $
                          </span>
                          8624
                          <span className="text-white font-semibold text-sm">
                            .79
                          </span>
                        </p>
                        <p className="text-red-700 font-semibold">-2.1%</p>
                      </div>
                      <div className="w-1/2">
                        <p className="text-gray-400 font-medium text-[10px]">
                          Portfolio Change
                        </p>
                        <p className="text-white font-semibold text-3xl mt-2">
                          <span className="text-white font-normal text-xl">
                            $
                          </span>
                          624
                          <span className="text-white font-semibold text-sm">
                            .79
                          </span>
                        </p>
                        <p className="text-green-600 font-semibold">+8.6%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[60%] h-full justify-between">
                    <p className="text-white text-sm font-medium">
                      Profit/Loss Graph
                    </p>
                    <div className="w-full h-full blur-sm mt-2">
                      <CustomAreaChart
                        data={dummyChartData}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex w-full justify-between mt-10">
            <GradientContainer
              width="w-[30%]"
              height="h-[200px]"
              children={
                <div className="w-full h-full rounded-2xl flex p-4 flex-col px-4">
                  <p className="text-white text-sm font-medium">Assets</p>
                  <div className="assetsContainer flex flex-col h-full  overflow-y-scroll pt-8">
                    {coinList && coinList.length > 1 ? (
                      coinList?.map(
                        (ele) =>
                          ele?.available != 0 && (
                            <div className="flex mt-1 justify-between my-1">
                              <button
                                onClick={() => {
                                  navigate(`/coin-desc/${ele.currency}`, {
                                    state: { coin: ele.currency },
                                  });
                                }}
                                className="flex"
                              >
                                <img
                                  alt="btc"
                                  className="h-8 w-8 rounded-full bg-white"
                                  src={getCoinMeta(ele.currency)?.logoUrl}
                                />
                                <div className="ml-2">
                                  <div className="flex items-center">
                                    <p className=" text-white text-sm font-semibold">
                                      {ele.currency}
                                    </p>
                                    <p className=" text-white font-semibold text-[10px] ml-2">
                                      {getCoinMeta(ele.currency)?.slug}
                                    </p>
                                  </div>
                                  <div className="h-[6px] w-full rounded-lg bg-yellow-400" />
                                </div>
                              </button>
                              <div className="mr-1">
                                <p
                                  style={{ textAlign: "right" }}
                                  className="font-bold text-sm text-white"
                                >
                                  {Number(ele?.available).toFixed(7)}
                                </p>
                                <div className=" text-white text-[9px] flex items-end justify-end">
                                  <p>
                                    $
                                    {ele.currency == "USDT"
                                      ? Number(ele.available).toFixed(8)
                                      : ele.available != 0 &&
                                        currentPrice[ele.currency] &&
                                        Number(
                                          ele.available *
                                            currentPrice[ele.currency]
                                        ).toFixed(8)}
                                  </p>
                                  {/* <p className="text-[7px]">(+{24}%)</p> */}
                                </div>
                              </div>
                            </div>
                          )
                      )
                    ) : (
                      <p className="text-white font-mont text-xl font-semibold text-center">
                        No assets found !!
                      </p>
                    )}
                  </div>
                </div>
              }
            />
            <GradientContainer
              width="w-[65%]"
              height="h-[200px]"
              children={
                <div className="w-full h-full rounded-2xl flex p-4 flex-col">
                  <p className="text-white text-sm font-medium">Indexes</p>
                  <div className="flex w-full h-full items-center">
                    {indexData &&
                      indexData.map((d) => {
                        return (
                          <>
                            <GradientContainer
                              width="w-1/5"
                              height="h-[85%]"
                              children={
                                <div className="w-full h-full rounded-2xl p-1">
                                  <div
                                    style={{
                                      backgroundImage: `url('/${indBgImgList[12]}')`,
                                    }}
                                    className="bg-no-repeat bg-cover bg-center flex h-full w-full rounded-xl justify-center items-center p-3"
                                  >
                                    <p className="text-white font-bold text-sm text-center">
                                      {d?.indexName}
                                    </p>
                                  </div>
                                </div>
                              }
                            />
                            <div className="flex flex-col flex-wrap h-[90%] items-center">
                              {d?.transactionSummary.map((ele) => {
                                const ticker =
                                  ele?.currency_pair?.split("_")[0];
                                return (
                                  <div className="flex ml-5 m-1 min-w-[150px] justify-between">
                                    <div className="flex">
                                      <img
                                        alt="btc"
                                        className="h-8 w-8 border-[3px] border-yellow-400 rounded-full"
                                        src={getCoinMeta(ticker)?.logoUrl}
                                      />
                                      <div className="pl-[10px]">
                                        <p className="text-white font-semibold text-sm">
                                          {ticker}
                                        </p>
                                        <p className=" text-white text-[8px]">
                                          {getCoinMeta(ticker)?.slug}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="ml-4 flex flex-col justify-end items-end">
                                      <p className="text-white font-semibold text-sm">
                                        {ele?.amount}
                                      </p>
                                      <p className=" text-white text-[8px]">
                                        {(
                                          currentPrice[ticker] * ele?.amount
                                        ).toFixed(3)}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex mt-[50px]">
            <div
              className="h-[50px] font-mont text-white text-[24px] rounded-3xl px-8 flex items-center"
              style={{ background: "rgba(255, 255, 255, 0.2" }}
            >
              Transactions
              <img
                alt="drop-down"
                src={require("../../assets/dropdown.png")}
                onClick={() => {
                  if (openIndex === 0) {
                    setOpenIndex(-1);
                  } else {
                    setOpenIndex(0);
                  }
                }}
                style={openIndex === 0 ? {} : { transform: "rotate(-90deg)" }}
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="w-[100%] mt-[10px]">
            {openIndex === 0 && (
              <Table
                data={transactions?.map((item) => {
                  return {
                    transactionId: item.id,
                    type: item.side,
                    coin: getCoinMeta(item.currencyPair.split("_")[0]).slug,
                    date: item?.createTime,
                    amount: item.amount,
                    status: "Completed",
                  };
                })}
              />
            )}
            {/* {openIndex === 1 && (
              <Table
                data={[
                  {
                    transactionId: "443433434",
                    type: "Sell",
                    coin: "Other Index",
                    date: "June 22, 2022",
                    amount: "$25",
                    status: "Completed",
                  },
                  {
                    transactionId: "443433434",
                    type: "Sell",
                    coin: "Other Index",
                    date: "June 22, 2022",
                    amount: "$25",
                    status: "Completed",
                  },
                  {
                    transactionId: "3443433434",
                    type: "Buy",
                    coin: "Gaming Index",
                    date: "June 22, 2022",
                    amount: "$15",
                    status: "Pending",
                  },
                  {
                    transactionId: "3343443433434",
                    type: "Buy",
                    coin: "Gaming Index",
                    date: "June 22, 2022",
                    amount: "$15",
                    status: "Pending",
                  },
                  {
                    transactionId: "3343443433434",
                    type: "Buy",
                    coin: "Gaming Index",
                    date: "June 22, 2022",
                    amount: "$15",
                    status: "Pending",
                  },
                ]}
              />
            )} */}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center w-[25%] bg-gradient-to-tr from-slate-900 to-purple-800 px-8 items-center justify-center flex flex-col"
      >
        <div
          className={`flex justify-center flex-col ${
            width > 1440 ? "w-[80%]" : "w-full"
          } ${height > 800 ? "h-[800px]" : "h-screen"}`}
        >
          <Tabs onClick={(val) => setTransactionMode(val)} data={tabsData} />
          <div className="mt-[8%] flex flex-col justify-between">
            {transactionMode == 0 ? (
              <Deopsite
                balance={balance}
                onRefresh={() => setRefresh((prev) => prev + 1)}
                showRefresh={showRefresh}
              />
            ) : (
              <Withdraw currencyChain={currentCurrencyChain} />
            )}
          </div>
          {transactionMode == 1 && (
            <button
              onClick={() => {
                setFailed(true);
                console.log(ticker);
              }}
              className="bg-primaryButton mt-10 text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center xl:text-lg"
            >
              Deposit Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openLoader: () => dispatch({ type: types.OPEN_LOADER }),
    closeLoader: () => dispatch({ type: types.CLOSE_LOADER }),
  };
};

export default connect(null, mapDispatchToProps)(WalletOverView);
