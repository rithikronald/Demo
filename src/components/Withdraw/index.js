import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { arr } from "../../hooks/getcoinMetaData";
import { GradientContainer } from "../GradientContainer";

export const Withdraw = (props) => {
  const [ticker, setTicker] = useState(arr[0].ticker);
  const [amount, setAmount] = useState();
  const [address, setAddress] = useState();
  const [currency, setCurrency] = useState("USDT");
  const [chain, setChain] = useState();
  const navigate = useNavigate();

  const withDraw = () => {
    axios
      .post(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/withdraw/QrUR3ejnnTY9mgTOLN4dqMwttVP2`,
        {
          currency: currency,
          address: address,
          amount: amount,
          chain: chain,
        }
      )
      .then((res) => {
        console.log("WITHDRAW RESPONSE", res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex flex-col">
      <GradientContainer
        //   height={` ${height > 800 ? "h-[60%]" : "h-[65%]"}`}
        className={"w-full"}
        children={
          <div className="flex flex-col p-4 py-[5%] gap-3 justify-center w-full">
            <div className="mt-3">
              <div className="flex justify-between">
                <p className="text-white font-medium text-xs ml-2 mb-1">
                  Enter Amount
                </p>
                {/* <p className="text-white font-semibold text-[10px]">₿ 0.23562</p> */}
              </div>
              <GradientContainer
                height="h-16"
                width="w-full"
                className={"mt-2"}
                children={
                  <input
                    type="text"
                    className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                }
              />
            </div>
            <div className="mt-3">
              <div className="flex justify-between">
                <p className="text-white font-medium text-xs ml-2 mb-1">
                  Wallet Address
                </p>
                <p
                  onClick={() => navigate("/ManageAddresses")}
                  className="text-blue-500 font-semibold text-[10px]"
                >
                  manage addresses
                </p>
              </div>
              <GradientContainer
                height="h-10"
                width="w-full"
                className={"mt-2"}
                children={
                  <div className="flex w-full h-full justify-around items-center">
                    <input
                      type="text"
                      className="h-full w-[90%] ring-0 bg-transparent text-white text-xs rounded-2xl text-center form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
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
            <div className="mt-3">
              <p className="text-white font-medium text-xs ml-2 mb-1">
                Select Token
              </p>
              {/* <select
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
              </select> */}
              <button
                onClick={() => {
                  console.log("Amount", amount);
                  console.log("Address", address);
                  console.log("Currency", currency);
                  console.log("Chain", chain);
                }}
                className={`rounded-3xl ${
                  ticker == "USDT" && "ring-2"
                } bg-maxPurple ring-2 ring-white flex justify-between items-center ml-2 px-4 p-1 `}
              >
                <img
                  alt="vector"
                  className="w-6 h-6"
                  src={require("../../assets/usdt.png")}
                />
                <p className="text-white ml-1 text-xs font-semibold">USDT</p>
              </button>
            </div>
            <div className="mt-3">
              <p className="text-white font-medium text-xs ml-2 mb-1">
                Select Chain
              </p>
              <div className="bg-maxPurple mt-2 rounded-3xl h-8 flex items-center p-1 pl-2">
                <select
                  id="countries"
                  className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
                  onChange={(e) => setChain(e.target.value)}
                >
                  {["ETH", "BSC", "TRX", "SOL", "MAT"].map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-white font-medium text-[10px] ml-2 mb-1">
                Memo (Optional)
              </p>
              <GradientContainer
                height="h-14"
                width="w-full"
                className={"mt-2"}
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
        onClick={() => {
          // console.log("dasdasd")
          withDraw();
        }}
        className="bg-primaryButton mt-10 text-white p-4 font-semibold rounded-lg w-full h-14 shadow-lg text-lg flex justify-center items-center xl:text-lg"
      >
        Withdraw Now
      </button>
    </div>
  );
};
