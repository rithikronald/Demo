// 15-w-1536 14-w-1440 15-h-714 14-h-768
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import pimg from "../../assets/usdc.png";
import { CustomIndexChart } from "../../components/Charts/CustomIndexChart";
import { CustomPieChart } from "../../components/Charts/CustomPieChart";
import { GradientContainer } from "../../components/GradientContainer";
import {
  indBgImgList,
  pieColors,
  risk,
  tenure,
} from "../../constants/constants";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import types from "../../store/types";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import Stepper from "react-stepper-horizontal";
import Slider from "../../components/Slider";
import { maximumInstance, ws } from "../../App";
import { getCurrentPrice } from "../../utility/getCurrentPrice";

const Home = (props) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const [maxPicksList, setMaxPicksList] = useState(6);
  const [indexesList, setIndexesList] = useState(4);
  const [pageRightIndex, setPageRightIndex] = useState(0);
  const [coinMetaData, setcoinMetaData] = useState();
  const [coinBasket, setCoinBasket] = useState();
  const [amount, setAmount] = useState("");
  const [tenureIndex, setTenureIndex] = useState();
  const [riskIndex, setRiskIndex] = useState();
  const [smartSuggestList, setSmartSuggestList] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [percentageChange, setPercentageChange] = useState();
  const [kycStatus, setKycStatus] = useState();

  function onmessage(evt) {
    const data = JSON.parse(evt?.data);
    const coinName = data?.result?.currency_pair?.split("_")[0];
    // console.log("Home", data?.result?.currency_pair, data?.result?.last);
    if (coinName) {
      setCurrentPrice((prev) => {
        return {
          ...prev,
          [`${coinName}`]: data?.result?.last,
        };
      });
      setPercentageChange((prev) => {
        return {
          ...prev,
          [`${coinName}`]: data?.result?.change_percentage,
        };
      });
    }
  }

  useEffect(() => {
    console.log("Current Price", currentPrice);
  }, [currentPrice]);

  useEffect(() => {
    console.log("IN HOME SCREEN");
    console.log(ws.readyState);
    var array = JSON.stringify({
      time: new Date().getTime,
      channel: "spot.tickers",
      event: "subscribe",
      payload: [
        "BTC_USDT",
        "ETH_USDT",
        "BNB_USDT",
        "XRP_USDT",
        "ADA_USDT",
        "SOL_USDT",
        "DOGE_USDT",
        "DOT_USDT",
      ],
    });
    if (ws.readyState) {
      console.log("CLEARED");
      ws.send(array);
    }
    ws.onmessage = onmessage;

    return () => {
      if (ws.readyState) {
        var array = JSON.stringify({
          time: Date.now(),
          channel: "spot.tickers",
          event: "unsubscribe",
          payload: [
            "ETH_USDT",
            "BNB_USDT",
            "XRP_USDT",
            "ADA_USDT",
            "SOL_USDT",
            "DOGE_USDT",
            "DOT_USDT",
          ],
        });
        ws.send(array);
      }
    };
  }, [ws.readyState]);

  useEffect(() => {
    props.openLoader();
    maximumInstance
      .get(`/dashboard/${localStorage?.getItem("uid")}`)
      .then((response) => {
        // console.log("KYC Response", response?.data?.KycStatus);
        // console.log("Response", response?.data);
        setcoinMetaData(response?.data?.coins);
        setCoinBasket(response?.data?.coinBaskets);
        setKycStatus(response?.data?.KycStatus);
        if (response?.data?.KycStatus == "completed") {
          localStorage.setItem("isKycVerified", true);
        }
        props.closeLoader();
      })
      .catch((err) => {
        console.log("error", err);
        props.closeLoader();
      });
  }, []);

  const getSmartSuggestList = (val) => {
    if (tenureIndex != null && riskIndex != null) {
      maximumInstance
        .get(`/smartSuggest/${val}`)
        .then((response) => {
          console.log("RESPONSE", response?.data);
          setSmartSuggestList(response?.data);
          setPageRightIndex(2);
        })
        .catch((err) => console.log("error", err));
    } else {
      toast.warning("Select Tenure and Profile to continue", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const arrGen = (arr) => {
    const tempArr = [];
    arr?.map((item, index) => {
      tempArr.push({
        uv: item?.value,
        name: moment(item?.date).format("DDMMM YYYY"),
      });
    });
    return tempArr;
  };

  return (
    <div className="App  bg-gradient-to-tl justify-center items-center from-bg via-bgl1 to-darkPurple  flex h-screen w-full font-mont">
      <div
        style={{
          backgroundImage: `url('/images/mainbg.png')`,
        }}
        className="Left basis-3/4 overflow-y-scroll items-center bg-no-repeat bg-cover bg-center p-10 px-14 flex flex-col justify-around h-screen pl-[90px]"
      >
        {/* Banner */}
        {/* <div className="flex w-full h-1/3">
          <div className="welcomeCard rounded-2xl w-full h-full bg-gradient-to-r from-purple-700 ... flex 2xl:pl-10">
            <div className="cardLeft w-1/2 h-full p-6 pl-[10%] flex flex-col  justify-around 3xl:py-20">
            <Stepper steps={[
              {title: ''},
              {title: ''},
              {title: ''},
            ]} activeStep={1} />
            <div className="px-[15%] flex justify-between">
              <p className="font-mont text-white text-[13px]">Step 1</p>
              <p className="font-mont text-white text-[13px]">Step 2</p>
              <p className="font-mont text-white text-[13px]">Step 3</p>
            </div>
            <div className="px-[15%] flex justify-between">
              <p className="font-mont text-white font-bold text-[16px]">KYC Completed</p>
              <p className="font-mont text-white font-bold text-[16px]">Smart Suggest</p>
              <p className="font-mont text-white font-bold text-[16px]">Secure Account</p>
            </div>
            <div className="px-[15%] pt-[20px]">

            <Slider />
            </div>
            <div className="px-[15%]">
              <p className="font-mont text-white font-bold text-[14px] pt-[10px]">36% Completed</p>
            </div>
            </div>
            <div className="cardLeft w-1/2  h-full flex justify-center">
              <img
                alt="welcomeImg"
                className="h-full"
                src={require("../../assets/welcomeImg.png")}
              />
            </div>
          </div>
        </div> */}
        <div
          className={`flex mt-5 flex-col justify-between ${
            height > 800 ? "h-[800px]" : "h-screen"
          } ${width > 1440 ? "w-[90%]" : "w-full"}`}
        >
          <div className="flex w-full h-[230px] relative">
            <img
              src={require("../../assets/smartSuggestFlowBackground.png")}
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full pt-[20px]">
              <Stepper
                steps={[{ title: "" }, { title: "" }, { title: "" }]}
                activeStep={kycStatus == "completed" ? 0 : "none"}
              />
              <div className="px-[15%] flex justify-between">
                <p className="font-mont text-white text-[13px]">Step 1</p>
                <p className="font-mont text-white text-[13px]">Step 2</p>
                <p className="font-mont text-white text-[13px]">Step 3</p>
              </div>
              <div className="px-[15%] flex justify-between">
                <p className="font-mont text-white font-bold text-[16px]">
                  KYC Completed
                </p>
                <p className="font-mont text-white font-bold text-[16px]">
                  Smart Suggest
                </p>
                <p className="font-mont text-white font-bold text-[16px]">
                  Secure Account
                </p>
              </div>
              <div className="px-[15%] pt-[20px]">
                <Slider value={kycStatus == "completed" ? 30 : 0} />
              </div>
              <div className="px-[15%]">
                <p className="font-mont text-white font-bold text-[14px] pt-[10px]">
                  {kycStatus == "completed" ? 30 : 0}% Completed
                </p>
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
                coinMetaData?.map((item, index) => {
                  const data = getCoinMeta(item?.ticker);
                  return index < 8 ? (
                    <GradientContainer
                      className="mt-4"
                      key={index}
                      width="w-[24%]"
                      height="h-16"
                      children={
                        <button
                          onClick={() => {
                            navigate(`/coin-desc/${data?.ticker}`, {
                              state: { coin: item?.ticker },
                            });
                          }}
                          className="flex justify-between items-center xl:p-4 xl:px-4 p-2 px-2 w-full h-full"
                        >
                          <div className="flex flex-row items-center">
                            <img
                              alt="logo"
                              className="xl:w-8 xl:h-8 lg1:w-6 lg1:h-6 bg-white rounded-full"
                              src={data?.logoUrl}
                            />
                            <div className="ml-2 flex flex-col items-start">
                              <p className="text-white font-semibold text-sm">
                                {data?.ticker}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {data?.slug}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="text-white font-semibold lg1:text-xs xl:text-sm">
                              {"$"}
                              {currentPrice?.[item?.ticker] == 0
                                ? currentPrice?.[item?.ticker]
                                : item?.price}
                            </p>
                            <p
                              className={`${
                                percentageChange?.[data?.ticker]
                                  ? percentageChange?.[data?.ticker] > 0
                                    ? "text-green-500"
                                    : "text-red-500"
                                  : Number(item?.percent_change_24h) > 0
                                  ? "text-green-500"
                                  : "text-red-500"
                              } xl:text-[10px] text-[9px] font-semibold`}
                            >
                              <i
                                class={`fa-sharp fa-solid ${
                                  percentageChange?.[data?.ticker]
                                    ? percentageChange?.[data?.ticker] > 0
                                      ? "text-green-500 fa-caret-up"
                                      : "text-red-500 fa-caret-down"
                                    : Number(item?.percent_change_24h) > 0
                                    ? "text-green-500 fa-caret-up"
                                    : "text-red-500 fa-caret-down"
                                } mr-[1px]`}
                              />{" "}
                              {percentageChange?.[data?.ticker]
                                ? percentageChange?.[data?.ticker] > 0
                                  ? "+"
                                  : ""
                                : Number(item?.percent_change_24h)
                                ? "+"
                                : ""}
                              {percentageChange?.[data?.ticker] == null
                                ? item?.percent_change_24h
                                : percentageChange?.[data?.ticker]}
                              %
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
                  index < 4 && (
                    <GradientContainer
                      width="w-[24%]"
                      key={index}
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
                            <div className="flex w-full h-[90%] items-end">
                              <CustomIndexChart
                                grid={false}
                                width={"100%"}
                                height={"70%"}
                                data={arrGen(
                                  item?.basketData?.price[`change_${"30d"}`]
                                )}
                              />
                            </div>
                          </div>
                          <div className="flex w-full justify-between items-center mt-1">
                            <div className="flex">
                              {item?.coins?.map((item, index) => {
                                const data = getCoinMeta(item);
                                return (
                                  index < 3 && (
                                    <div
                                      key={index}
                                      className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full"
                                    >
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
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right basis-1/4 items-center bg-no-repeat bg-cover h-screen bg-center  bg-gradient-to-tl from-bg via-maxPurple to-darkPurple p-8 justify-around flex flex-col"
      >
        <div
          className={`flex flex-col justify-between  ${
            width > 1440 ? "w-[80%]" : "w-full"
          } ${height > 800 ? "h-[800px]" : "h-screen"}`}
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
                onClick={() => {
                  setPageRightIndex(1);
                  // getCurrentPrice("BTC");
                }}
                className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-16 shadow-lg text-xl"
              >
                Start Now
              </button>
            </>
          )}
          {pageRightIndex == 1 && (
            <>
              <ToastContainer hideProgressBar autoClose={1000} closeOnClick />
              <div>
                <button
                  type="button"
                  class="text-white bg-primaryButton font-medium rounded-lg text-sm py-1 px-3 text-center items-center"
                  onClick={() => setPageRightIndex(0)}
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
                    type="text"
                    value={amount}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
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
                      key={index}
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
                      key={index}
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
          {pageRightIndex == 2 && (
            <div className="flex flex-col h-[100%] justify-between py-5">
              <div>
                <p className="text-white font-semibold text-center mt-2  text-xl">
                  Suggested portfolio for maximum gain
                </p>
              </div>
              <GradientContainer
                width="w-full"
                height="h-[70%]"
                className={"my-5"}
                children={
                  <div className="w-full h-full rounded-2xl flex flex-col justify-around ">
                    {smartSuggestList && (
                      <CustomPieChart
                        data={smartSuggestList}
                        width={"100%"}
                        height={"45%"}
                      />
                    )}
                    <div className="flex flex-row w-full justify-center items-center gap-2 text-sm font-semibold">
                      <p className="p-1 px-2 bg-white rounded-xl">
                        {tenureIndex == 0
                          ? "short-term"
                          : tenureIndex == 1
                          ? "mid-term"
                          : "long-term"}
                      </p>
                      <p className="p-1 px-2 bg-white rounded-xl">
                        {riskIndex == 1
                          ? "basic"
                          : riskIndex == 2
                          ? "balance"
                          : "bold"}
                      </p>
                    </div>
                    <div className="coinList grid grid-cols-2 p-[10px_10px_40px_20px] overflow-scroll mt-2 ml-1 h-[40%]">
                      {smartSuggestList?.coins?.map((item, index) => {
                        const data = getCoinMeta(item);
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-center mt-[20px] w-[100%] px-3"
                          >
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
                                  (
                                    100 / smartSuggestList?.coins.length
                                  ).toFixed(2) + 20
                                }px] rounded-lg bg-[${pieColors[index]}]`}
                              ></div>
                              <p className="font-semibold text-white text-sm 3xl:text-xl">
                                {Number(
                                  (
                                    100 / smartSuggestList?.coins.length
                                  ).toFixed(2)
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
                  onClick={() => setPageRightIndex(1)}
                  className="bg-gradient-to-r from-purple-300 bg-purple-400 text-white p-4 font-semibold rounded-lg w-full h-14 shadow-lg text-sm  flex justify-center items-center"
                >
                  Go Back
                </button>
                <button
                  onClick={() =>
                    navigate("/transactionSummary", {
                      state: { indexData: smartSuggestList, amount: amount },
                    })
                  }
                  className="bg-primaryButton text-white p-4 rounded-lg w-full h-14 shadow-lg text-sm font-semibold flex justify-center items-center "
                >
                  Invest Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeLoader: () => dispatch({ type: types.CLOSE_LOADER }),
    openLoader: () => dispatch({ type: types.OPEN_LOADER }),
  };
};

export default connect(null, mapDispatchToProps)(Home);
