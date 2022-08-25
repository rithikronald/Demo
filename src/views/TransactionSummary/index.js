import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const data02 = [
  {
    name: "Group A",
    value: 2400,
    color: "#165DFF",
  },
  {
    name: "Group B",
    value: 4567,
    color: "#0FC6C2",
  },
  {
    name: "Group C",
    value: 1398,
    color: "#722ED1",
  },
  {
    name: "Group D",
    value: 9800,
    color: "#F7BA1E",
  },
  {
    name: "Group E",
    value: 3908,
    color: "#722ED1",
  },
  {
    name: "Group F",
    value: 4800,
    color: "#D91AD9",
  },
];

const TransactionSummary = () => {
  return (
    <div className="TransactionSummary bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40  p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <p className="text-2xl 2xl:text-4xl 3xl:text-5xl font-bold text-white">
          Transaction Summary
        </p>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-1/3 rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl flex justify-between">
            <div className="flex justify-center items-center basis-1/4">
              <PieChart width={400} height={400}>
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={120}
                >
                  {data02.map((ele) => (
                    <Cell fill={ele.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="flex basis-3/4 flex-wrap p-2 justify-center ">
              {[1, 2, 3, 4, 5, 6].map((ele) => (
                <div className="flex justify-center items-center mr-14">
                  <img
                    alt="btc"
                    className="h-[46px] w-[46px] border-[4px] border-yellow-400 rounded-full"
                    src={require("../../assets/btcLight.png")}
                  />
                  <div className="pl-[10px]">
                    <p className="text-white font-bold font">ETH</p>
                    <p className="font-mont text-white text-[19px]">Ethereum</p>
                  </div>
                  <div className="ml-16">
                    <p className="text-white font-bold font">2.53243</p>
                    <p className="font-mont text-white text-[19px]">$232243 </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-1/3 rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl flex p-12 flex-wrap items-center">
            <div className="w-1/3">
              <p className="text-gray-400">Order Number</p>
              <p className="font-bold text-white text-2xl">894ytiwnhiuyb8n</p>
            </div>
            <div className="w-1/3">
              <p className="text-gray-400">Portfolio</p>
              <p className="font-bold text-white text-2xl">Gaming Index</p>
            </div>
            <div className="w-1/3">
              <p className="text-gray-400">Portfolio Value</p>
              <p className="font-bold text-white text-6xl">$5100</p>
            </div>
            <div className="w-1/3">
              <p className="text-gray-400">Transaction Fee 1%</p>
              <p className="font-bold text-white text-2xl">1523.23 USD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col sm:hidden xl:flex">
        <div className="w-full h-2/3 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
          <div className="bg-bg rounded-3xl h-full flex flex-col p-8 items-center">
            <img
              className="w-[150px] h-[150px]"
              alt="qr"
              src={require("../../assets/qrScanner.png")}
            />
            <div className="w-full flex flex-col mt-6 h-full justify-between">
              <div>
                <p className="text-white text-xs">Wallet Address</p>
                <div className="w-full h-10 mt-2 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                  <div className="bg-bg rounded-3xl h-full flex items-center p-4">
                    <p className="text-gray-400">ijhg9h4ghi98u23u2039iasda</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white text-xs">Select Token</p>
                <div className="w-full h-10 mt-2 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                  <div className="bg-bg rounded-3xl h-full flex items-center p-1 pl-2">
                    <select
                      id="countries"
                      className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-lg rounded-2xl focus:ring-bg focus:border-bg"
                    >
                      <option selected value="+91">
                        BTC (Bitcoin)
                      </option>
                      <option value="+1">ETH (Ethereum)</option>
                      <option value="+33">USDT (Tether)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white text-xs">Select Chain</p>
                <div className="w-full h-10 mt-2 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                  <div className="bg-bg rounded-3xl h-full flex items-center p-1 pl-2">
                    <select
                      id="countries"
                      className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-lg rounded-2xl focus:ring-bg focus:border-bg"
                    >
                      <option selected value="+91">
                        BTC (Bitcoin)
                      </option>
                      <option value="+1">ETH (Ethereum)</option>
                      <option value="+33">USDT (Tether)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full flex justify-between">
                  <p className="text-white text-xs">You have to pay</p>
                  <p className="text-white text-xs">Bal: 75,645.54</p>
                </div>
                <div className="w-full h-18 mt-2 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                  <div className="bg-bg rounded-3xl h-full flex items-center p-4">
                    <p className="text-white font-bold text-4xl">$5215.79</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-primaryButton text-white p-4 font-bold rounded-lg w-full h-16 shadow-lg text-xl">
          Deposit Now
        </button>
      </div>
    </div>
  );
};

export default TransactionSummary;
