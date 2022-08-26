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
      <div className="Left bg-yellow-40  p-8 px-14 flex flex-col justify-around items-center sm:flex xl:basis-3/4">
        <p className="text-2xl 2xl:text-2xl 3xl:text-5xl font-semibold text-white">
          Transaction Summary
        </p>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-[80%] h-[60%] rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl flex">
            <div className="grid grid-cols-2 gap-2 w-1/2 p-10">
              {[1, 2, 3, 4, 5, 6].map((ele) => (
                <div className="flex justify-center items-center mt-[20px]">
                  <img
                    className="h-[44px] w-[44px]"
                    src={require("../../assets/btcLight.png")}
                  />
                  <div className="pl-[10px]">
                    <p className="font-mont text-white text-[10px]">BITCOIN</p>
                    <div className="h-[6px] w-[20px] rounded-lg bg-yellow-400"></div>
                    <p className="font-mont text-white text-[19px]">BTC</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <PieChart width={200} height={200}>
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                >
                  {data02.map((ele) => (
                    <Cell fill={ele.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex mt-6 items-center p-3 ml-5">
                <p className="text-gray-400 w-1/3">Portfolio Value</p>
                <p className="text-white font-bold text-4xl ml-4">$5100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg w-[80%] h-[30%] rounded-2xl flex flex-col justify-between p-6 ">
          <div className="">
            <p className="text-gray-400">Order Number</p>
            <p className="font-bold text-white text-2xl">894ytiwnhiuyb8n</p>
          </div>
          <div className="">
            <p className="text-gray-400">You have to pay</p>
            <div className="flex w-full justify-between">
              <div className="flex items-end">
                <p className="font-bold text-white text-4xl">5289</p>
                <p className="font-bold text-2xl text-gray-400 ml-3">USD</p>
              </div>
              <button className="bg-primaryButton text-white p-2 font-medium rounded-lg w-[200px] h-12 shadow-lg text-lg">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col sm:hidden xl:flex">
        <div className="w-full h-[60%] mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px]">
          <div className="bg-bg rounded-3xl h-full flex flex-col p-6 items-center">
            <div className="rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px]">
              <div className="bg-bg rounded-3xl h-full flex flex-col items-center p-2">
                <img
                  className="w-[150px] h-[150px]"
                  alt="qr"
                  src={require("../../assets/qrScanner.png")}
                />
                <p className="text-white mt-2">xhdodsd72661hbs</p>
              </div>
            </div>
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
              <div className="flex mt-4 justify-between">
                <div className="rounded-3xl p-1 px-3 bg-maxPurple flex justify-center items-center">
                  <img
                    alt="vector"
                    className="w-6 h-6"
                    src={require("../../assets/usdc.png")}
                  />
                  <p className="text-white ml-3 text-sm">USDC</p>
                </div>
                <div className="rounded-3xl p-2 px-3 bg-maxPurple flex">
                  <img
                    alt="vector"
                    className="w-6 h-6"
                    src={require("../../assets/usdc.png")}
                  />
                  <p className="text-white ml-3">USDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs text-center">
            Make sure you have enough balance in wallet to proceed with this
            deposit transaction
          </p>
          <div className="rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] mt-3">
            <div className="bg-bg rounded-3xl h-full flex flex-col p-4">
              <p className="text-gray-400 text-sm">Available Balance</p>
              <p className="text-white font-bold text-2xl 2xl:text-3xl 3xl:text-5xl">
                <span className="font-normal">$</span>12500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
