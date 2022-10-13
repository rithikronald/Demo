import React from "react";
import { GradientContainer } from "../GradientContainer";

export const Deopsite = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
          Deposit
        </p> */}
        <GradientContainer
          width="w-full"
          height="h-full"
          className={"mt-4"}
          children={
            <div className="rounded-3xl h-full w-full flex flex-col p-4 py-[5%] items-center">
              <GradientContainer
                children={
                  <div className="rounded-3xl h-full flex flex-col items-center p-2">
                    <img
                      className="w-[150px] h-[150px]"
                      alt="qr"
                      src={require("../../assets/qrScanner.png")}
                    />
                    <p className="text-white mt-2">xhdodsd72661hbs</p>
                  </div>
                }
              />
              <div className="w-full flex flex-col mt-6 h-full justify-center">
                <div className="bg-maxPurple rounded-3xl h-8 flex items-center p-1 pl-2">
                  <select
                    id="countries"
                    className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
                  >
                    <option selected value="+91">
                      BTC (Bitcoin)
                    </option>
                    <option value="+1">ETH (Ethereum)</option>
                    <option value="+33">USDT (Tether)</option>
                  </select>
                </div>
                <div className="flex mt-6 space-x-1 justify-between">
                  <div className="rounded-3xl p-2  bg-maxPurple flex justify-center items-center">
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/usdc.png")}
                    />
                    <p className="text-white ml-1 text-xs">USDC</p>
                  </div>
                  <div className="rounded-3xl p-2  bg-maxPurple flex justify-center items-center">
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/usdt.png")}
                    />
                    <p className="text-white ml-1 text-xs">USDT</p>
                  </div>
                  <div className="rounded-3xl p-2  bg-maxPurple flex justify-center items-center">
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/busd.png")}
                    />
                    <p className="text-white ml-1 text-xs">BUSD</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-gray-400 text-xs text-center">
          Make sure you have enough balance in wallet to proceed with this
          deposit transaction
        </p>
        <GradientContainer
          className={"mt-3"}
          children={
            <div className="rounded-3xl h-full flex flex-col p-4">
              <p className="text-gray-400 text-sm">Available Balance</p>
              <p className="text-white font-bold text-2xl 2xl:text-3xl 3xl:text-5xl">
                <span className="font-normal">$</span>12500
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};
