import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "July",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomAreaCharts = (props) => {
  return (
    <AreaChart
      width={props.width}
      height={props.height}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis tickCount={4} />
      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#805DE3"
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

const WalletOverView = () => {
  return (
    <div className="WalletOverview bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40  p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <p className="text-2xl 2xl:text-4xl 3xl:text-5xl font-bold text-white">
          Wallet OverView
        </p>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-1/3 rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl flex justify-between p-10">
            <div className="flex h-full w-1/3 flex-col justify-between">
              <div>
                <p className="text-white">Available Balance</p>
                <p className="text-white font-bold text-4xl mt-4">$40123.79</p>
              </div>
              <div className="w-full flex flex-row justify-between">
                <div className="">
                  <p className="text-gray-400 text-xs">Portfolio Change</p>
                  <p className="text-white font-bold text-3xl mt-2">$8624.79</p>
                  <p className="text-red-700">-2.1%</p>
                </div>
                <div className="">
                  <p className="text-gray-400 text-xs">Total Profit Loss</p>
                  <p className="text-white font-bold text-3xl mt-2">$642.79</p>
                  <p className="text-green-500">+8.6%</p>
                </div>
              </div>
            </div>
            <div className="flex w-2/3 h-full justify-center items-center">
              <CustomAreaCharts width={650} height={240} />
            </div>
          </div>
        </div>
        <div className="flex w-full h-1/3 justify-between">
          <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-[30%] h-full rounded-2xl p-0.5">
            <div className="bg-bg w-full h-full rounded-2xl flex p-4 flex-col">
              <p className="text-white">Assets</p>
              <div className="flex flex-col h-full justify-center">
                {[1, 2, 3].map((ele) => (
                  <div className="flex mt-3 justify-between">
                    <div className="flex">
                      <img
                        alt="btc"
                        className="h-[44px] w-[44px]"
                        src={require("../../assets/btcLight.png")}
                      />
                      <div className="pl-[10px]">
                        <p className="font-mont text-white text-[10px]">
                          BITCOIN
                        </p>
                        <div className="h-[6px] w-[20px] rounded-lg bg-yellow-400"></div>
                        <p className="font-mont text-white text-[19px]">BTC</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-white font-bold font">2.53243</p>
                      <p className="font-mont text-white text-[19px]">
                        $232243{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-[65%] h-full rounded-2xl p-0.5">
            <div className="bg-bg w-full h-full rounded-2xl flex p-4 flex-col">
              <p className="text-white">Indexes</p>
              <div className="flex w-full h-full items-center justify-between">
                <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-1/5 h-5/6 rounded-2xl p-0.5">
                  <div className="bg-bg w-full h-full rounded-2xl flex p-1">
                    <div className="bg-gradient-to-tl from-right via-left to-top flex h-full w-full rounded-2xl justify-center items-center p-3">
                      <p className="text-white font-bold text-xl text-center">
                        Gaming Index
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {[1, 2, 3].map((ele) => (
                    <div className="flex justify-center items-center">
                      <img
                        alt="btc"
                        className="h-[46px] w-[46px] border-[4px] border-yellow-400 rounded-full"
                        src={require("../../assets/btcLight.png")}
                      />
                      <div className="pl-[10px]">
                        <p className="text-white font-bold font">ETH</p>
                        <p className="font-mont text-white text-[19px]">
                          Ethereum
                        </p>
                      </div>
                      <div className="ml-10">
                        <p className="text-white font-bold font">2.53243</p>
                        <p className="font-mont text-white text-[19px]">
                          $232243{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div></div>
              </div>
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
            <div className="w-full flex flex-col mt-6 h-full">
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

export default WalletOverView;
