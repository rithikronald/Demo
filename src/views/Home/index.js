import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import "./style.css";

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

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [maxPicksList, setMaxPicksList] = useState(6);
  const [indexesList, setIndexesList] = useState(4);
  const [pageRightIndex, setPageRightIndex] = useState(0);
  useEffect(() => {
    console.log("DIMENSION", width, height);
    if (width >= 2500) {
      setMaxPicksList(12);
      setIndexesList(4);
    } else if (width >= 2000) {
      setMaxPicksList(8);
      setIndexesList(4);
    } else if (width >= 1440) {
      setMaxPicksList(6);
      setIndexesList(3);
    }
  }, [width, height]);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        {/* Banner */}
        <div className="flex w-full h-1/3">
          <div className="welcomeCard rounded-2xl w-full h-full bg-gradient-to-l to-purple-600 from-purple-900 flex 2xl:pl-10">
            <div className="cardLeft basis:1/2 w-full h-full p-6 flex flex-col justify-around 3xl:py-20">
              <p className="text-lg text-white font-medium 3xl:text-3xl ">
                Welcome Ram
              </p>
              <p className="text-2xl 2xl:text-4xl 3xl:text-5xl font-bold text-white">
                Enhance your financial life with Maximum Protocol
              </p>
              <button className="bg-purple-500 text-white p-4 font-bold rounded-lg md:w-40 h-14 shadow-lg">
                Watch Now
              </button>
            </div>
            <div className="cardLeft basis:1/2 w-full h-full flex justify-center">
              <img
                alt="welcomeImg"
                className="h-full"
                src={require("../../assets/welcomeImg.png")}
              />
            </div>
          </div>
        </div>
        {/* Coins */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-xl">Max Picks</p>
            <button className="text-gray-400 text">view all</button>
          </div>
          <div className="coinSection flex flex-row flex-wrap justify-between">
            {/* xl-6 2xl-8 3xl-12(or)5 */}
            {Array.apply(null, Array(maxPicksList)).map(() => (
              <div className="coinCard mt-4 h-16 mr-5 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
                <div className="bg-bg rounded-2xl h-full flex flex-row items-center p-4 px-6">
                  <div className="flex flex-row mr-16 items-center">
                    <img
                      alt="logo"
                      className="w-5 h-8"
                      src={require("../../assets/icon.png")}
                    />
                    <div className="ml-3">
                      <p className="text-white font-bold text-lg">ETH</p>
                      <p className="text-gray-400 text-sm">Ethereum</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-md">$5342</p>
                    <p className="text-red-600 text-sm">22%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Indexes */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-xl">Indexes</p>
            <button className="text-gray-400 text">view all</button>
          </div>
          <div className="basketCard flex flex-row flex-wrap justify-between">
            {/* xl-3 2xl-4 3xl-4(or)5 */}
            {Array.apply(null, Array(indexesList)).map(() => (
              <div className="w-1/4 h-60 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 2xl:w-1/5 3xl:w-1/6 3xl:h-80">
                <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-2">
                  <div className="bg-gradient-to-tl from-right via-left to-top flex h-5/6 w-full rounded-2xl"></div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex py-2 space-x-1">
                      <img
                        className="w-6"
                        alt="btc"
                        src={require("../../assets/btc.png")}
                      />
                      <img
                        alt="eth"
                        className="w-6"
                        src={require("../../assets/eth.png")}
                      />
                      <img
                        alt="bnb"
                        className="w-6"
                        src={require("../../assets/bnb.png")}
                      />
                    </div>
                    <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-6 w-1/3 rounded-2xl p-0.5">
                      <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col sm:hidden xl:flex">
        {pageRightIndex == 0 && (
          <>
            {/* pageIndex-0 */}
            <div>
              <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
                AI Powered financial manager
              </p>
              <p className="text-white font-bold text-center mt-5  text-2xl 2xl:text-4xl 3xl:text-5xl">
                Personalised portfolio for Maximum returns
              </p>
            </div>
            <img alt="img" src={require("../../assets/illustration.png")} />
            <button
              onClick={() => setPageRightIndex(1)}
              className="bg-primaryButton text-white p-4 font-bold rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Start Now
            </button>
          </>
        )}
        {pageRightIndex == 1 && (
          <>
            <div>
              <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
                How much would you like to Invest?
              </p>
              <p className="text-white font-bold text-center mt-5  text-2xl 2xl:text-4xl 3xl:text-5xl">
                $12500
              </p>
            </div>
            <div>
              <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
                What is your investment Tenure?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-6">
                {Array.apply(null, Array(3)).map(() => (
                  <div className="w-28 h-40 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                    <div className="optionsCard w-full h-full p-3 rounded-2xl flex flex-col justify-between bg-bg items-start">
                      <img
                        alt="img"
                        className="w-5 h-5"
                        src={require("../../assets/optionIcon.png")}
                      />
                      <p className="text-xl font-bold text-white">Short-Term</p>
                      <p className="text-sm text-center text-white font-medium ">
                        1-3 years
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
                What is your investment Tenure?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-6">
                {Array.apply(null, Array(3)).map(() => (
                  <div className="w-28 h-40 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
                    <div className="optionsCard w-full h-full p-3 rounded-2xl flex flex-col justify-between bg-bg items-start">
                      <img
                        alt="img"
                        className="w-5 h-5"
                        src={require("../../assets/optionIcon.png")}
                      />
                      <p className="text-xl font-bold text-white">Short-Term</p>
                      <p className="text-sm text-center text-white font-medium ">
                        1-3 years
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setPageRightIndex(2)}
              className="bg-primaryButton text-white p-4 font-bold rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Smart Suggest
            </button>
          </>
        )}
        {pageRightIndex == 2 && (
          <>
            <div>
              <p className="text-white font-bold text-center mt-5  text-2xl 2xl:text-4xl 3xl:text-5xl">
                Suggested portfolio for Maximum gain
              </p>
            </div>
            <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-1/2 rounded-2xl p-0.5">
              <div className="bg-bg w-full h-full rounded-2xl">
                <div className="flex justify-center items-center relative">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={data02}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                    >
                      {data02.map((ele) => (
                        <Cell fill={ele.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className="font-mont text-white font-[18px]">BTC</p>
                    <p className="font-mont text-white font-bold text-[30px] mt-[-10px]">
                      22%
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-[20px_20px_40px_20px]">
                  {[1, 2, 3, 4, 5, 6].map((ele) => (
                    <div className="flex justify-center items-center mt-[20px]">
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
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setPageRightIndex(1)}
              className="bg-primaryButton text-white p-4 font-bold rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Invest Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
