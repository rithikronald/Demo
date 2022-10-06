import axios from "axios";
import React, { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { GradientContainer } from "../../components/GradientContainer";
// import { Table } from "../../components/Table";
import {
  data02,
  dummyChartData,
  indBgImgList,
} from "../../constants/constants";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { RightContainer, Tabs } from "../CoinList";
import "./style.css";
import { arr } from "../../hooks/getcoinMetaData";
import { maximumInstance } from "../../setup";
import { Table } from "../../components/TransactionsHistoryTable";

const tabsData = [
  {
    label: "Deposit",
  },
  {
    label: "Withdraw",
  },
];

const WalletOverView = () => {
  const [coinList, setCoinList] = useState();
  const { height, width } = useWindowDimensions();
  const [ticker, setTicker] = useState(arr[0].ticker);
  const [currentCurrencyChain, setCurrentCurrencyChain] = useState([]);

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
    setTicker(arr[0].ticker);
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/coinList/`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setCoinList(response?.data);
      })
      .catch((err) => console.log("error", err));
  }, []);
  return (
    <div className="WalletOverview bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont">
      <div className="Left p-10 pt-[300px] px-14 flex flex-col justify-around sm:flex xl:basis-3/4 overflow-y-scroll h-[100%]">
        <div className="flex flex-col w-full">
          <p className="text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-white">
            Wallet Overview
          </p>
          <GradientContainer
            width="w-full"
            height="h-[300px]"
            className={"mt-6"}
            children={
              <div className="w-full h-full rounded-2xl flex justify-between p-10 px-14">
                <div className="flex h-full w-[40%] flex-col justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">
                      Available Balance
                    </p>
                    <p className="text-white font-semibold text-6xl mt-2">
                      <span className="text-white font-normal text-5xl">$</span>
                      40123
                      <span className="text-white font-semibold text-3xl">
                        .79
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex flex-row gap-x-14">
                    <div className="">
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
                    <div className="">
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
                <div className="flex flex-col w-[60%] h-full justify-center">
                  <p className="text-white text-sm font-medium">
                    Profit/Loss Graph
                  </p>
                  <CustomAreaChart
                    data={dummyChartData}
                    width={"100%"}
                    height={"90%"}
                  />
                </div>
              </div>
            }
          />
        </div>
        <div className="flex w-full h-[300px] justify-between mt-10">
          <GradientContainer
            width="w-[30%]"
            height="h-[200px]"
            children={
              <div className="w-full h-full rounded-2xl flex p-4 flex-col px-8">
                <p className="text-white text-sm font-medium">Assets</p>
                <div className="assetsContainer flex flex-col h-full justify-center overflow-y-scroll pt-8">
                  {[1, 2, 3, 4, 5, 6].map((ele) => (
                    <div className="flex mt-1 justify-between my-1">
                      <div className="flex">
                        <img
                          alt="btc"
                          className="h-8 w-8"
                          src={require("../../assets/btcLight.png")}
                        />
                        <div className="ml-2">
                          <div className="flex items-center">
                            <p className=" text-white text-sm font-semibold">
                              BTC
                            </p>
                            <p className=" text-white font-semibold text-[10px] ml-2">
                              bitcoin
                            </p>
                          </div>
                          <div className="h-[6px] w-full rounded-lg bg-yellow-400" />
                        </div>
                      </div>
                      <div className="mr-1">
                        <p className="text-white font-bold text-sm">2.53243</p>
                        <div className=" text-white text-[9px] flex items-center">
                          <p>$232243</p>
                          <p className="text-[7px]">(+21%)</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  <GradientContainer
                    width="w-1/5"
                    height="h-[90%]"
                    children={
                      <div className="w-full h-full rounded-2xl flex p-1">
                        <div
                          style={{
                            backgroundImage: `url('/${indBgImgList[12]}')`,
                          }}
                          className="bg-no-repeat bg-cover bg-center flex h-full w-full rounded-xl justify-center items-center p-3"
                        >
                          <p className="text-white font-bold text-sm text-center">
                            Gaming Index
                          </p>
                        </div>
                      </div>
                    }
                  />
                  <div className="flex flex-col h-[90%] justify-between items-center py-1">
                    {[1, 2, 3].map((ele) => (
                      <div className="flex ml-6">
                        <img
                          alt="btc"
                          className="h-8 w-8 border-[3px] border-yellow-400 rounded-full"
                          src={require("../../assets/btcLight.png")}
                        />
                        <div className="pl-[10px]">
                          <p className="text-white font-semibold text-sm">
                            ETH
                          </p>
                          <p className=" text-white text-[8px]">Ethereum</p>
                        </div>
                        <div className="ml-4">
                          <p className="text-white font-semibold text-sm">
                            2.53243
                          </p>
                          <p className=" text-white text-[8px]">$232243 </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div>
                    <GradientContainer
                      width="w-[100px]"
                      height="h-[90%]"
                      children={
                        <div className="w-full h-full rounded-2xl flex p-1">
                          <div
                            style={{
                              backgroundImage: `url('/${indBgImgList[12]}')`,
                            }}
                            className="bg-no-repeat bg-cover bg-center flex h-full w-full rounded-xl justify-center items-center p-3"
                          >
                            <p className="text-white font-bold text-sm text-center">
                              Gaming Index
                            </p>
                          </div>
                        </div>
                      }
                    />
                  </div> */}
                </div>
              </div>
            }
          />
        </div>
        <div className="w-[100%] mt-[50px]">
          <Table
            title={"Transactions"}
            data={[
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
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center w-[25%] bg-gradient-to-tr from-slate-900 to-purple-800 p-8 justify-center items-center flex flex-col"
      >
        <Tabs data={tabsData} />
        <GradientContainer
          height={` ${height > 800 ? "h-[60%]" : "h-[65%]"}`}
          className={"w-full mt-16"}
          children={
            <div className="flex flex-col p-4 justify-center w-full">
              <div className="mt-4">
                <div className="flex justify-between">
                  <p className="text-white font-medium text-xs ml-2 mb-1">
                    Enter Amount
                  </p>
                  <p className="text-white font-semibold text-[10px]">
                    ₿ 0.23562
                  </p>
                </div>
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
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <p className="text-white font-medium text-xs ml-2 mb-1">
                    Wallet Address
                  </p>
                  <p className="text-white font-semibold text-[10px]">
                    ₿ 0.23562
                  </p>
                </div>
                <GradientContainer
                  height="h-8"
                  width="w-full"
                  children={
                    <div className="flex w-full h-full justify-around items-center">
                      <p className="text-[#B4B4B4] text-[13px]">
                        ijhg9h4ghi98u23u2039i
                      </p>
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#fff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  }
                />
              </div>
              <div className="mt-4">
                <p className="text-white font-medium text-xs ml-2 mb-1">
                  Select Token
                </p>
                <div className="bg-maxPurple rounded-3xl h-8 flex items-center p-1 pl-2">
                  <select
                    id="countries"
                    className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                  >
                    {arr.map((item, index) => (
                      <option selected value={item.ticker}>
                        ({item.ticker}) {item.slug}
                      </option>
                    ))}
                    {/* <option selected value="+91">
                      BTC (Bitcoin)
                    </option>
                    <option value="+1">ETH (Ethereum)</option>
                    <option value="+33">USDT (Tether)</option> */}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white font-medium text-xs ml-2 mb-1">
                  Select Chain
                </p>
                <div className="bg-maxPurple rounded-3xl h-8 flex items-center p-1 pl-2">
                  <select
                    id="countries"
                    className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
                  >
                    {currentCurrencyChain?.map((item) => {
                      return <option value={item.chain}>{item.chain}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white font-medium text-[10px] ml-2 mb-1">
                  Memo (Optional)
                </p>
                <GradientContainer
                  height="h-14"
                  width="w-full"
                  children={
                    <input
                      type="text"
                      className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
                    />
                  }
                />
              </div>
            </div>
          }
        />
        <button
          onClick={() => console.log(ticker)}
          className="bg-primaryButton mt-10 text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center xl:text-lg"
        >
          Deposit Now
        </button>
      </div>
    </div>
  );
};

export default WalletOverView;
