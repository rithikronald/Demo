import "./style.css";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { indBgImgList,categoryList,risk,tenure,data02 } from "../../constants/constants";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { GradientContainer } from "../../components/GradientContainer";
import { CustomIndexChart } from "../../components/Charts/CustomIndexChart";
// 15-w-1536 14-w-1440 15-h-714 14-h-768

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
    if (width >= 2500) {
      setMaxPicksList(12);
      setIndexesList(6);
    } else if (width >= 1600) {
      setMaxPicksList(8);
      setIndexesList(4);
    } else if (width >= 1440) {
      setMaxPicksList(8);
      setIndexesList(4);
    }
  }, [width, height]);

  useEffect(() => {
  });

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/dashboard`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setcoinMetaData(response?.data?.coins);
        setCoinBasket(response?.data?.coinBaskets);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple  flex h-screen w-full font-mont">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        {/* Banner */}
        <div className="flex w-full h-1/3">
          <div className="welcomeCard rounded-2xl w-full h-full bg-gradient-to-r from-purple-700 ... flex 2xl:pl-10">
            <div className="cardLeft w-1/2 h-full p-6 pl-[10%] flex flex-col  justify-around 3xl:py-20">
              <p className="text-sm text-white font-bold 3xl:text-3xl ">
                Welcome Ram!
              </p>
              <p className="text-2xl 2xl:text-2xl 3xl:text-5xl font-bold text-white">
                Enhance your financial life with Maximum Protocol
              </p>
              <button className="bg-purple-500 text-white font-bold text-sm rounded-lg md:w-40 h-14 shadow-lg mt-3">
                <i class="fa-solid fa-play text-white"/> Watch Now
              </button>
            </div>
            <div className="cardLeft w-1/2  h-full flex justify-center">
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
            <p className="text-white text-lg font-medium">Max Picks</p>
            <button
              onClick={() => navigate("/coinList")}
              className="text-gray-400 text-xs"
            >
              View All
            </button>
          </div>
          <div className="coinSection flex flex-row flex-wrap justify-between">
            {/* xl-6 2xl-8 3xl-12(or)5 */}
            {coinMetaData &&
              coinMetaData.map((item, index) => {
                const data = getCoinMeta(item?.ticker);
                return index < maxPicksList ? (
                  <button
                    onClick={() => navigate(`/coin-desc/${data?.ticker}`)}
                    className="coinCard w-[250px] mt-4 h-16 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20"
                  >
                    <div className="flex w-full h-full bg-bgl2 rounded-2xl">
                    <div className="bg-gradient-to-b from-maxPurple ... rounded-2xl w-full h-full flex flex-row justify-between items-center p-4 px-4">
                      <div className="flex flex-row items-center">
                        <img
                          alt="logo"
                          className="w-8 h-8 bg-white rounded-full"
                          src={data?.logoUrl}
                        />
                        <div className="ml-3 flex flex-col items-start">
                          <p className="text-white font-medium">
                            {data?.ticker}
                          </p>
                          <p className="text-gray-400 text-sm">{data?.ticker}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-white font-semibold text-sm">
                          ${item?.price?.value.toFixed(2)}
                        </p>
                        <p className="text-green-500 text-[10px]">
                        <i class="fa-sharp fa-solid fa-caret-up text-green-500 mr-[1px]"/> {item?.percent_change_24h}%
                        </p>
                      </div>
                    </div>
                    </div>

                  </button>
                ) : null;
              })}
          </div>
        </div>
        {/* Indexes */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-lg font-medium">Indexes</p>
            <button
              onClick={() => navigate("/indexes/")}
              className="text-gray-400 text-xs"
            >
              View All
            </button>
          </div>
          <div className="basketCard flex flex-row flex-wrap justify-between">
            {/* xl-3 2xl-4 3xl-4(or)5 */}
            {coinBasket?.map(
              (item, index) =>
                index < indexesList && (
                  <button
                    onClick={() =>
                      navigate("/indexes/indexId", {
                        state: { indexData: item },
                      })
                    }
                    className="w-[24%] h-56 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-80"
                  >
                    <div className="flex w-full h-full bg-bgl2 rounded-3xl">
                    <div className="bg-gradient-to-b from-maxPurple ... rounded-3xl w-full h-full flex flex-col justify-between p-2">
                      <div style={{backgroundImage:`url('${indBgImgList[index+4]}')`}} className={`bg-no-repeat bg-cover bg-center flex items-start justify-between flex-col h-5/6 w-full rounded-2xl p-[6%]`}>
                        <p className="text-white text-md font-semibold">
                          {item?.basketName}
                        </p>
                        <div className="flex w-full h-[90%]">
                        <CustomLineChart width={"100%"} height={"100%"} />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex py-2 space-x-1">
                          {item?.coins?.map((item, index) => {
                            const data = getCoinMeta(item);
                            return (
                              index < 3 && (
                                <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                                  <div className="flex w-full h-full justify-center items-center">
                                    <img
                                      className="w-6 rounded-full bg-white"
                                      alt="btc"
                                      src={data?.logoUrl}
                                    />
                                  </div>
                                </div>
                              )
                            );
                          })}
                          <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                            <div className="bg-bg rounded-full flex w-full h-full justify-center items-center flex-col">
                              <p className="text-white text-[7px] font-bold">
                                + {item?.coins.length - 3}
                              </p>
                              <p className="text-white text-[5px]">more</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 h-6 w-10 rounded-2xl p-[1px]">
                          <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center font-bold text-[8px]">
                            VIEW
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </button>
                )
            )}
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tl from-bg via-maxPurple to-darkPurple p-8 justify-around flex flex-col sm:hidden xl:flex">
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
              className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Start Now
            </button>
          </>
        )}
        {pageRightIndex == 1 && (
          <>
            <div>
              <p className="text-white font-bold text-center mt-5   text-2xl 2xl:text-2xl 3xl:text-5xl">
                Choose Your Interests
              </p>
            </div>
            <div>
              <p className="text-sm text-center text-white  font-bold 3xl:text-3xl ">
                Select an Option
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-3">
                {categoryList.map((item, index) => (
                  <button
                    // onClick={() => navigate("/indexes")}
                    className="tenure w-[30%] h-[120px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-[250px] mt-5  hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1"
                  >
                    <div className="optionsCard h-full w-full px-1 py-4 rounded-2xl flex flex-col justify-between bg-bg items-start cursor-pointer hover:bg-white hover:bg-opacity-50">
                      <img
                        alt="img"
                        className="hover:w-[100px] hover:h-[100px] hover:absolute hover:mt-3"
                        src={require("../../assets/gaming.png")}
                      />
                      <div className="bg-white rounded-full px-1 self-end shadow-[0_1px_0px_rgb(0,0,0)]">
                        <p className="text-black  text-[7px] font-bold">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white  font-extralight text-center text-sm">
                Try out our Smart Suggest to get personalised recommendations
              </p>
              <button
                onClick={() => setPageRightIndex(2)}
                className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl mt-5"
              >
                Smart Suggest
              </button>
            </div>
          </>
        )}
        {pageRightIndex == 2 && (
          <>
            <div>
              <button
                type="button"
                class="text-white bg-primaryButton font-medium rounded-lg text-sm py-1 px-3 text-center items-center"
                onClick={() => setPageRightIndex(1)}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  ></path>
                </svg>
              </button>
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl mt-3">
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
              onClick={() => setPageRightIndex(3)}
              className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Smart Suggest
            </button>
          </>
        )}
        {pageRightIndex == 3 && (
          <>
            <div>
              {/* <button
                type="button"
                class="text-white bg-primaryButton font-medium rounded-lg text-sm py-1 px-3 text-center items-center"
                onClick={() => setPageRightIndex(2)}
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  ></path>
                </svg>
              </button> */}
              <p className="text-white font-semibold text-center mt-2  text-2xl 2xl:text-2xl 3xl:text-5xl">
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
                    <p className=" text-white font-[18px]">BTC</p>
                    <p className=" text-white font-bold text-[30px] mt-[-10px]">
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
                        <p className=" text-white text-[10px] 3xl:text-xl">
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
            <div className="flex space-x-2">
              <button
                onClick={() => setPageRightIndex(2)}
                className="bg-gradient-to-r from-purple-300 bg-purple-400 text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate("/transactionSummary")}
                className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center"
              >
                Invest Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;