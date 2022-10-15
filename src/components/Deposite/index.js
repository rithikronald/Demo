import axios from "axios";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { GradientContainer } from "../GradientContainer";

export const Deopsite = () => {
  const [currencyChain, setCurrencyChain] = useState();
  const [ticker, setTicker] = useState();
  const [walletAddress, setWalletAddress] = useState();

  function textAbstract(el, maxlength = 16, delimiter = " ") {
    let txt = el.text();
    if (el == null) {
      return "";
    }
    if (txt.length <= maxlength) {
      return txt;
    }
    let t = txt.substring(0, maxlength);
    let re = /\s+\S*$/;
    let m = re.exec(t);
    t = t.substring(0, m.index);
    return t + "...";
  }

  useEffect(() => {
    axios({
      url: `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/generateDepositAddress/QrUR3ejnnTY9mgTOLN4dqMwttVP2/${ticker}`,
      method: "get",
    })
      .then((res) => {
        setCurrencyChain(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ticker]);

  useEffect(() => {
    console.log("Address", walletAddress);
  }, [walletAddress]);

  return (
    <>
      <div className="flex flex-col w-full font-mont">
        {/* <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
          Deposit
        </p> */}
        <GradientContainer
          width="w-full"
          height="h-full"
          className={""}
          children={
            <div className="rounded-3xl h-full w-full flex flex-col p-4 py-[5%] items-center">
              <div className="w-full flex flex-col h-full justify-center">
                <p className="text-white font-semibold text-xs ml-2 mb-1">
                  Select Token
                </p>
                <div className="flex mt-2 space-x-1 justify-between">
                  <button
                    onClick={() => setTicker("USDC")}
                    className={`rounded-3xl p-2 w-[30%] ${
                      ticker == "USDC" && "ring-2"
                    } gap-2 focus:ring-2 ring-white bg-maxPurple flex justify-center items-center`}
                  >
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/usdc.png")}
                    />
                    <p className="text-white ml-1 font-semibold text-xs">
                      USDC
                    </p>
                  </button>
                  <button
                    onClick={() => setTicker("USDT")}
                    className={`rounded-3xl p-2 w-[30%] ${
                      ticker == "USDT" && "ring-2"
                    } bg-maxPurple focus:ring-2 ring-white flex justify-center items-center`}
                  >
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/usdt.png")}
                    />
                    <p className="text-white ml-1 text-xs font-semibold">
                      USDT
                    </p>
                  </button>
                  <button
                    onClick={() => setTicker("BUSD")}
                    className={`rounded-3xl p-2 w-[30%] gap-2 ${
                      ticker == "BUSD" && "ring-2"
                    } ring-white bg-maxPurple flex justify-center items-center`}
                  >
                    <img
                      alt="vector"
                      className="w-6 h-6"
                      src={require("../../assets/busd.png")}
                    />
                    <p className="text-white ml-1 text-xs font-semibold">
                      BUSD
                    </p>
                  </button>
                </div>
                <p className="text-white font-semibold text-xs ml-2 mb-1 mt-6">
                  Select Chain
                </p>
                <div className="bg-maxPurple rounded-3xl h-8 mt-2 flex items-center p-1 pl-2">
                  <select
                    id="countries"
                    className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-2xl focus:ring-bg focus:border-bg"
                    placeholder="SELECT CHAIN"
                    disabled={!currencyChain}
                    onChange={(e) => {
                      setWalletAddress(e.target.value);
                    }}
                  >
                    {currencyChain ? (
                      currencyChain?.multichainAddresses?.map((item, index) => {
                        return (
                          <option value={item?.address}>{item?.chain}</option>
                        );
                      })
                    ) : (
                      <option>Select Chain</option>
                    )}
                  </select>
                </div>
              </div>
              {walletAddress && (
                <>
                  <div className="w-full">
                    <p className="text-white font-semibold text-xs ml-2 mb-1">
                      Wallet Address
                    </p>
                  </div>
                  <GradientContainer
                    children={
                      <div className="rounded-2xl bg-white h-full flex flex-col items-center p-2">
                        <QRCode
                          size={150}
                          style={{
                            height: "150px",
                            width: "150px",
                          }}
                          value={walletAddress}
                          viewBox={`0 0 150 150`}
                        />
                      </div>
                    }
                  />
                  <p className="text-white font-semibold text-xs m-2">(or)</p>
                  <GradientContainer
                    height="h-16"
                    width="w-full"
                    className={"mt-2"}
                    children={
                      <div className="flex w-full h-full justify-between items-center px-4">
                        <p className="text-white font-semibold text-[13px]">
                          {walletAddress.length > 35
                            ? walletAddress.substring(0, 35) + "..."
                            : walletAddress}
                        </p>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(walletAddress)
                          }
                        >
                          <svg
                            class="w-5 h-5"
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
                        </button>
                      </div>
                    }
                  />
                </>
              )}
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
