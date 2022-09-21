import "./style.css";
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import {
  indBgImgList,
  categoryList,
  risk,
  tenure,
  data02,
  pieColors,
} from "../../constants/constants";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { GradientContainer } from "../../components/GradientContainer";
import { CustomIndexChart } from "../../components/Charts/CustomIndexChart";
import { CustomPieChart } from "../../components/Charts/CustomPieChart";
import pimg  from "../../assets/usdc.png";
// 15-w-1536 14-w-1440 15-h-714 14-h-768

const Home = () => {
  const { height, width } = useWindowDimensions();
  const [maxPicksList, setMaxPicksList] = useState(6);
  const [indexesList, setIndexesList] = useState(4);
  const [pageRightIndex, setPageRightIndex] = useState(0);
  const [coinMetaData, setcoinMetaData] = useState();
  const [coinBasket, setCoinBasket] = useState();
  const [amount, setAmount] = useState("");
  const [tenureIndex, setTenureIndex] = useState("s");
  const [riskIndex, setRiskIndex] = useState("0");
  const [smartSuggestList, setSmartSuggestList] = useState();
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

  const getSmartSuggestList = (val) => {
    console.log("Value", val);
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/smartSuggest/${val}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("RESPONSE", response?.data);
        setSmartSuggestList(response?.data);
      })
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    console.log("sss", tenureIndex, riskIndex);
  }, [tenureIndex, riskIndex]);

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple  flex h-screen w-full font-mont">
      <div
        // style={{
        //   backgroundImage: `url('/images/mainbg.png')`,
        // }}
        className="Left bg-no-repeat bg-cover bg-center p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4"
      >
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
                <i class="fa-solid fa-play text-white" /> Watch Now
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
                  <GradientContainer
                    className="mt-4"
                    width="w-[24%]"
                    height="h-16"
                    children={
                      <button
                        onClick={() => navigate(`/coin-desc/${data?.ticker}`)}
                        className="flex justify-between items-center p-4 px-4 w-full h-full"
                      >
                        <div className="flex flex-row items-center">
                          <img
                            alt="logo"
                            className="w-8 h-8 bg-white rounded-full"
                            src={data?.logoUrl}
                          />
                          <div className="ml-2 flex flex-col items-start">
                            <p className="text-white font-semibold text-sm">
                              {data?.ticker}
                            </p>
                            <p className="text-gray-400  text-xs">
                              {data?.slug}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-white font-semibold text-sm">
                            ${item?.price?.value.toFixed(2)}
                          </p>
                          <p
                            className={`${
                              Number(item?.percent_change_24h) > 0
                                ? "text-green-500"
                                : "text-red-500"
                            } text-[10px] font-semibold`}
                          >
                            <i
                              class={`fa-sharp fa-solid ${
                                Number(item?.percent_change_24h) > 0
                                  ? "text-green-500 fa-caret-up"
                                  : "text-red-500 fa-caret-down"
                              } mr-[1px]`}
                            />{" "}
                            {item?.percent_change_24h}%
                          </p>
                        </div>
                      </button>
                    }
                  />
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
                  <GradientContainer
                    width="w-[24%]"
                    height="h-56"
                    className={"mt-4"}
                    children={
                      <button
                        onClick={() =>
                          navigate("/indexes/indexId", {
                            state: { indexData: item },
                          })
                        }
                        className="flex w-full h-full flex-col justify-between p-2"
                      >
                        <div
                          style={{
                            backgroundImage: `url('${
                              indBgImgList[index + 4]
                            }')`,
                          }}
                          className={`bg-no-repeat bg-cover bg-center flex items-start justify-between flex-col h-5/6 w-full rounded-xl p-[6%]`}
                        >
                          <p className="text-white text-md font-semibold">
                            {item?.basketName}
                          </p>
                          <div className="flex w-full h-[90%]">
                            <CustomIndexChart width={"100%"} height={"100%"} />
                          </div>
                        </div>
                        <div className="flex w-full justify-between items-center mt-1">
                          <div className="flex">
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
                          <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 h-6 w-14 rounded-2xl p-[1px]">
                            <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center font-bold text-[8px]">
                              VIEW
                            </button>
                          </div>
                        </div>
                      </button>
                    }
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center basis-1/4 bg-gradient-to-tl from-bg via-maxPurple to-darkPurple p-8 justify-around flex flex-col sm:hidden xl:flex"
      >
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
            <img
              alt="img"
              className="w-full h-[50%]"
              src={require("../../assets/illustration.png")}
            />
            <button
              onClick={() => setPageRightIndex(1)}
              className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl"
            >
              Start Now
            </button>
          </>
        )}
        {pageRightIndex == 1 && (
          <div className="flex flex-col justify-around w-full h-full">
            <div>
              <p className="text-white font-semibold text-center mt-5 text-3xl 3xl:text-5xl">
                Choose Your Interests
              </p>
            </div>
            <div>
              <div className="flex">
                <p className="text-sm text-center text-white  font-semibold 3xl:text-3xl">
                  Select an Option
                </p>
              </div>
              <div className="flex flex-wrap flex-row justify-between items-center">
                {categoryList.map((item, index) => (
                  <GradientContainer
                    width="w-[30%]"
                    height="h-[120px] 2xl:h-[140px]"
                    className={
                      "mt-5  hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1 3xl:h-[250px] p-[0.6px]"
                    }
                    children={
                      <button className="h-full w-full px-1 py-4 rounded-2xl flex flex-col justify-between  items-start cursor-pointer hover:bg-gradient-to-b from-white ...">
                        <img
                          alt="img"
                          className=""
                          src={require("../../assets/gaming.png")}
                        />
                        <div className="flex w-full justify-end">
                          <div className="bg-white rounded-full px-1">
                            <p className="text-black  text-[7px] font-bold">
                              {item?.title}
                            </p>
                          </div>
                        </div>
                      </button>
                    }
                  />
                ))}
                <div>
                  <p className="text-white font-light text-center text-sm mt-[5%]">
                    Try out our Smart Suggest to get personalised
                    recommendations
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setPageRightIndex(2)}
                className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl mt-5"
              >
                Smart Suggest
              </button>
            </div>
          </div>
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
              <div className="text-white justify-center items-center flex font-bold text-center mt-5 text-2xl 2xl:text-4xl 3xl:text-5xl">
                <p className="font-normal">$</p>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    console.log(
                      "comma",
                      Number(e.target.value).toLocaleString()
                    );
                    setAmount(e.target.value);
                  }}
                  className="h-10 w-[80%] ring-1 bg-transparent text-white ring-purple-600 text-2xl ml-2 font-bold rounded-xl text-center form-control outline-0"
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
                What is your investment Tenure?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-3">
                {tenure.map((item, index) => (
                  <GradientContainer
                    width="w-[30%]"
                    height="h-[150px]"
                    className={"3xl:h-[250px]"}
                    children={
                      <button
                        onClick={() => setTenureIndex(index)}
                        className={`tenureCard h-full w-full px-2 py-4 rounded-2xl flex flex-col justify-between items-start ${
                          tenureIndex === index && `ring-2 ring-white`
                        }`}
                        tabIndex="1"
                      >
                        <img
                          alt="img"
                          className="w-4 h-4 3xl:w-6 3xl:h-6"
                          src={require("../../assets/optionIcon.png")}
                        />
                        <p className="text-md font-semibold text-white my-3 3xl:text-3xl 3xl:my-5 2.5xl:text-lg text-start mr-3">
                          {item.title}
                        </p>
                        <p className="text-[8px] text-center text-white font-bold 3xl:text-lg">
                          {item.desc}
                        </p>
                      </button>
                    }
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
                What is your preferred Profile?
              </p>
              <div className="flex flex-wrap flex-row justify-between items-center mt-3">
                {risk.map((item, index) => (
                  <GradientContainer
                    width="w-[30%]"
                    height="h-[150px]"
                    className={"3xl:h-[250px]"}
                    children={
                      <button
                        onClick={() => setRiskIndex(index + 1)}
                        className={`riskCard h-full w-full px-2 py-4 rounded-2xl flex flex-col justify-between items-start ${
                          riskIndex === index + 1 && `ring-2 ring-white`
                        }`}
                        tabIndex="2"
                      >
                        <img
                          alt="img"
                          className="w-4 h-4 3xl:w-6 3xl:h-6"
                          src={require("../../assets/optionIcon.png")}
                        />
                        <p className="text-md font-semibold text-white my-3 3xl:text-3xl 3xl:my-5 2.5xl:text-lg">
                          {item.title}
                        </p>
                        <p className="text-[7px] text-white font-bold 3xl:text-lg text-start">
                          {item.desc}
                        </p>
                      </button>
                    }
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setPageRightIndex(3);
                const duration =
                  tenureIndex == 0 ? "s" : tenureIndex == 1 ? "m" : "l";
                getSmartSuggestList(duration + riskIndex);
              }}
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
            <GradientContainer
              width="w-full"
              height="h-[72%]"
              className={"my-5 2xl:h-[60%]"}
              children={
                <div className="w-full h-full rounded-2xl flex flex-col justify-around pt-4">
                  {smartSuggestList && (
                    <CustomPieChart
                      data={smartSuggestList}
                      width={"100%"}
                      height={"50%"}
                    />
                  )}
                  <div className="flex flex-row w-full justify-center items-center gap-2 text-sm font-semibold">
                    <p className="p-1 px-2 bg-white rounded-xl">
                      {tenureIndex == "s"
                        ? "short-term"
                        : tenureIndex == "m"
                        ? "mid-term"
                        : "long-term"}
                    </p>
                    <p className="p-1 px-2 bg-white rounded-xl">
                      {riskIndex == 1
                        ? "bold"
                        : riskIndex == 2
                        ? "balance"
                        : "basic"}
                    </p>
                  </div>
                  <div className="coinList grid grid-cols-2 p-[10px_10px_40px_20px] overflow-scroll ml-1">
                    {smartSuggestList?.coins?.map((item, index) => {
                      const data = getCoinMeta(item);
                      return (
                        <div className="flex items-center mt-[20px] w-[100%] px-3">
                          <img
                            alt="btc"
                            className="h-10 w-10 3xl:h-14 3xl:w-14 bg-white rounded-full"
                            src={data?.logoUrl ? data?.logoUrl : pimg}
                          />
                          <div className="pl-[6px]">
                            <p className="font-mont font-semibold text-white text-[10px] 3xl:text-xl">
                              {data?.ticker}
                            </p>
                            <div
                              className={`h-[6px] w-[${
                                (100 / smartSuggestList?.coins.length).toFixed(
                                  2
                                ) + 20
                              }px] rounded-lg bg-[${pieColors[index]}]`}
                            ></div>
                            <p className="font-semibold text-white text-sm 3xl:text-xl">
                              {Number(
                                (100 / smartSuggestList?.coins.length).toFixed(
                                  2
                                )
                              )}
                              %{/* {data?.ticker} */}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              }
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setPageRightIndex(2)}
                className="bg-gradient-to-r from-purple-300 bg-purple-400 text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center xl:text-lg 2xl:text-xl"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate("/transactionSummary")}
                className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center xl:text-lg"
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