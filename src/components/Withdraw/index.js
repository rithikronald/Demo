import React, { useState } from "react";
import { arr } from "../../hooks/getcoinMetaData";
import { GradientContainer } from "../GradientContainer";

export const Withdraw = (props) => {
  const [ticker, setTicker] = useState(arr[0].ticker);
  return (
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
              <p className="text-white font-semibold text-[10px]">₿ 0.23562</p>
            </div>
            <GradientContainer
              height="h-16"
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
          <div className="mt-3">
            <div className="flex justify-between">
              <p className="text-white font-medium text-xs ml-2 mb-1">
                Wallet Address
              </p>
              <p className="text-white font-semibold text-[10px]">₿ 0.23562</p>
            </div>
            <GradientContainer
              height="h-10"
              width="w-full"
              className={"mt-2"}
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
          <div className="mt-3">
            <p className="text-white font-medium text-xs ml-2 mb-1">
              Select Token
            </p>
            <div className="bg-maxPurple rounded-3xl h-8 mt-2 flex items-center p-1 pl-2">
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
          <div className="mt-3">
            <p className="text-white font-medium text-xs ml-2 mb-1">
              Select Chain
            </p>
            <div className="bg-maxPurple mt-2 rounded-3xl h-8 flex items-center p-1 pl-2">
              <select
                id="countries"
                className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
              >
                {props?.currencyChain?.map((item) => {
                  return <option value={item.chain}>{item.chain}</option>;
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
  );
};
