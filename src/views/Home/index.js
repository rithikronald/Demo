import "./style.css";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// 15-w-1536 14-w-1440 15-h-714 14-h-768
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

const tenure = [
  {
    title: "Short-Term",
    desc: "1-3 years",
  },
  {
    title: "Mid-Term",
    desc: "3-5 years",
  },
  {
    title: "Long-Term",
    desc: "5+ years",
  },
];

const risk = [
  {
    title: "Bold",
    desc: "High Returns Great Volatility",
  },
  {
    title: "Balance",
    desc: "Moderate Returns Fair Volatility",
  },
  {
    title: "Basic",
    desc: "Modest Returns Low Volatility",
  },
];

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [maxPicksList, setMaxPicksList] = useState(6);
  const [indexesList, setIndexesList] = useState(4);
  const [pageRightIndex, setPageRightIndex] = useState(0);
  const [coinMetaData, setcoinMetaData] = useState();
  const [coinBasket, setCoinBasket] = useState();
  const [tenureIndex, setTenureIndex] = useState(0);
  const [riskIndex, setRiskIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("DIMENSION", width, height);
    if (width >= 2500) {
      setMaxPicksList(12);
      setIndexesList(6);
    } else if (width >= 1600) {
      setMaxPicksList(8);
      setIndexesList(4);
    } else if (width >= 1440) {
      setMaxPicksList(6);
      setIndexesList(3);
    }
  }, [width, height]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/getDashboard`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("RESPONSE", response?.data?.coins);
        setcoinMetaData(response?.data?.coins);
        setCoinBasket(response?.data?.coinBaskets);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        {/* Banner */}
        <div className="flex w-full h-1/3">
          <div className="welcomeCard rounded-2xl w-full h-full bg-gradient-to-l to-purple-600 from-purple-900 flex 2xl:pl-10">
            <div className="cardLeft basis:1/2 w-full h-full p-6 flex flex-col justify-around 3xl:py-20">
              <p className="text-md text-white font-medium 3xl:text-3xl ">
                Welcome Ram!
              </p>
              <p className="text-2xl 2xl:text-2xl 3xl:text-5xl font-semibold text-white">
                Enhance your financial life with Maximum Protocol
              </p>
              <button className="bg-purple-500 text-white font-bold rounded-lg md:w-40 h-14 shadow-lg mt-3">
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
            <p className="text-white text-lg">Max Picks</p>
            <button
              onClick={() => navigate("/coinList")}
              className="text-gray-400 text"
            >
              view all
            </button>
          </div>
          <div className="coinSection flex flex-row flex-wrap justify-between space-x-1">
            {/* xl-6 2xl-8 3xl-12(or)5 */}
            {coinMetaData &&
              coinMetaData.map((item, index) =>
                index < maxPicksList ? (
                  <button
                    onClick={() => navigate("/coin-desc")}
                    className="coinCard w-[250px] mt-4 h-16 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20"
                  >
                    <div className="bg-bg rounded-2xl w-full h-full flex flex-row justify-between items-center p-4 px-4">
                      <div className="flex flex-row items-center">
                        <img
                          alt="logo"
                          className="w-6 h-6 bg-white rounded-full"
                          src={item?.logoUrl}
                        />
                        <div className="ml-3 flex flex-col items-start">
                          <p className="text-white font-medium">
                            {item?.ticker}
                          </p>
                          <p className="text-gray-400 text-sm">{item?.slug}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-white font-semibold text-md">
                          ${item?.price?.value.toFixed(2)}
                        </p>
                        <p className="text-red-600 text-sm">22%</p>
                      </div>
                    </div>
                  </button>
                ) : null
              )}
          </div>
        </div>
        {/* Indexes */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-lg">Indexes</p>
            <button
              onClick={() => navigate("/indexes/")}
              className="text-gray-400 text"
            >
              view all
            </button>
          </div>
          <div className="basketCard flex flex-row flex-wrap justify-between">
            {/* xl-3 2xl-4 3xl-4(or)5 */}
            {coinBasket?.map(
              (item, index) =>
                index < indexesList && (
                  <button
                    onClick={() => navigate("/indexes/indexId")}
                    className="w-[250px] h-56 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-80"
                  >
                    <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-2">
                      <div className="bg-gradient-to-tl from-right via-left to-top flex h-5/6 w-full rounded-2xl"></div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex py-2 space-x-1">
                          {item?.coins?.map((item, index) => {
                            return (
                              index < 3 && (
                                <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                                  <div className="flex w-full h-full justify-center items-center">
                                    <img
                                      className="w-6 rounded-full"
                                      alt="btc"
                                      src={item?.logoUrl}
                                    />
                                  </div>
                                </div>
                              )
                            );
                          })}
                          <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                            <div className="bg-bg rounded-full flex w-full h-full justify-center items-center flex-row flex-wrap">
                              <p className="text-white text-[8px] font-semibold">
                                + {item?.coins.length - 3}
                              </p>
                              <p className="text-white font-bold text-[6px]">more</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-6 w-1/3 rounded-2xl p-[1px]">
                          <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center text-xs">
                            VIEW
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>
                )
            )}
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-8 justify-around flex flex-col sm:hidden xl:flex">
        {pageRightIndex == 0 && (
          <>
            {/* pageIndex-0 */}
            <div>
              <p className="text-md text-center text-white font-medium 3xl:text-3xl ">
                AI Powered financial manager
              </p>
              <p className="text-white font-semibold text-center mt-6  text-2xl 2xl:text-2xl 3xl:text-5xl">
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
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
                How much would you like to Invest?
              </p>
              <p className="text-white font-bold text-center mt-5  text-2xl 2xl:text-4xl 3xl:text-5xl">
                <span className="font-normal">$</span>12500
              </p>
            </div>
            <div>
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
                What is your investment Tenure?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-3">
                {tenure.map((item, index) => (
                  <button
                    onClick={() => setTenureIndex(index)}
                    className="tenure w-[30%] h-[150px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-[250px]"
                  >
                    <div className="optionsCard h-full w-full px-2 py-4 rounded-2xl flex flex-col justify-between bg-bg items-start">
                      <img
                        alt="img"
                        className="w-4 h-4 3xl:w-6 3xl:h-6"
                        src={require("../../assets/optionIcon.png")}
                      />
                      <p className="text-md font-semibold text-white my-3 3xl:text-3xl 3xl:my-5 2.5xl:text-lg text-start mr-3">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-center text-white font-light 3xl:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
                What is your preferred Profile?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-3">
                {risk.map((item, index) => (
                  <button
                    onClick={() => console.log("Index", index)}
                    className="risk w-[30%] h-[150px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-[250px]"
                  >
                    <div className="optionsCard h-full w-full px-2 py-4 rounded-2xl flex flex-col justify-between bg-bg items-start">
                      <img
                        alt="img"
                        className="w-4 h-4 3xl:w-6 3xl:h-6"
                        src={require("../../assets/optionIcon.png")}
                      />
                      <p className="text-md font-semibold text-white my-3 3xl:text-3xl 3xl:my-5 2.5xl:text-lg">
                        {item.title}
                      </p>
                      <p className="text-[8px] text-white font-light 3xl:text-lg text-start">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setPageRightIndex(2)}
              className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Smart Suggest
            </button>
          </>
        )}
        {pageRightIndex == 2 && (
          <>
            <div>
              <p className="text-white font-semibold text-center mt-6  text-2xl 2xl:text-2xl 3xl:text-5xl">
                Suggested portfolio for maximum gain
              </p>
            </div>
            <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-[75%] rounded-2xl p-0.5 my-5 3xl:h-[60%]">
              <div className="bg-bg w-full h-full rounded-2xl flex flex-col justify-around pt-4">
                <div className="flex justify-center items-center relative">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={data02}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={width > 1768 ? 80 : 60}
                      outerRadius={width > 1768 ? 100 : 80}
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
                <div className="grid grid-cols-2 gap-3 p-[20px_20px_40px_20px]">
                  {[1, 2, 3, 4, 5, 6].map((ele) => (
                    <div className="flex justify-center items-center mt-[20px]">
                      <img
                        alt="btc"
                        className="h-10 w-10 3xl:h-14 3xl:w-14"
                        src={require("../../assets/btcLight.png")}
                      />
                      <div className="pl-[6px]">
                        <p className="font-mont text-white text-[10px] 3xl:text-xl">
                          BITCOIN
                        </p>
                        <div className="h-[6px] w-[20px] rounded-lg bg-yellow-400"></div>
                        <p className="font-medium text-white text-sm 3xl:text-xl">
                          22%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/transactionSummary")}
              className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl "
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
