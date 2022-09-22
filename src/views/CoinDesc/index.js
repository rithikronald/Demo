import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userIdContext } from "../../App";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { maximumInstance } from "../../setup";
import { numFormatter } from "../../utility/kFormatter";
import axios from "axios";
import moment from "moment";
import types from "../../store/types";
import {connect} from 'react-redux'
import Modal from './modal'

const CoinDesc = (props) => {
  const [data, setData] = useState();
  const [priceGrapgh, setPriceGrapgh] = useState([]);
  const [priceIndex, setPriceIndex] = useState("1d");
  const [mainIndex, setMainIndex] = useState("1d");
  const [socialIndex, setSocialIndex] = useState("1d");
  const [networkIndex, setNetworkIndex] = useState("1d");
  const [developerIndex, setDeveloperIndex] = useState("1d");
  const [sentimentIndex, setSentimentIndex] = useState("1d");
  const [mainSecondaryIndex, setMainSecondaryIndex] = useState("marketcap_usd");
  const [activeWalletPercentageChange, setActiveWalletPercentageChange] =
    useState("");
  const [activeAddressPerct, setActiveAddressPerct] = useState(0);
  const [dailyActivePerct, setDailyActivePerct] = useState(0);
  const [transactionVolumePerct, setTransactionVolumePerct] = useState(0);
  const [nvtRatioPerct, setNvtRatioPerct] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [tradingVolume, setTradingVolume] = useState(0);
  const [firstBoxAnnotation, setFirstBoxAnnotation] = useState("socialvolume");
  const [modalOpen, setModalOpen] = useState(false);

  const params = useParams();

  useEffect(() => {
    props.openLoader()
    maximumInstance
      .get(`/getCoin?ticker=${params.coinId}`)
      .then((response) => {
        setData(response?.data);
        props.closeLoader()
        setActiveAddressPerct(
          oneDayPercentage(
            response?.data?.active_addresses?.value,
            response?.data?.active_addresses?.change_1d
          )
        );
        setDailyActivePerct(
          oneDayPercentage(
            response?.data?.daily_active_addresses?.value,
            response.data?.daily_active_addresses?.change_1d
          )
        );
        setTransactionVolumePerct(
          oneDayPercentage(
            response?.data?.transaction_volume?.value,
            response.data?.transaction_volume?.change_1d
          )
        );
        setNvtRatioPerct(
          oneDayPercentage(
            response?.data?.nvt?.value,
            response.data?.nvt?.change_1d
          )
        );
        setMarketCap(
          oneDayPercentage(
            response?.data?.marketcap_usd?.value,
            response?.data?.marketcap_usd?.change_1d
          )
        );
        setTradingVolume(
          oneDayPercentage(
            response?.data?.tradingVolume?.value,
            response?.data?.tradingVolume?.change_1d
          )
        );
        props.closeLoader()
      })
      .catch((err) => {
        console.log("error", err)
        props.closeLoader()
      });
  }, []);

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
  function numberWithCommas(x) {
    if (!x) {
      return x;
    }

    let numbers = x.toString().split(".");
    let firstPart = Number(parseInt(numbers[0])).toLocaleString("en");
    let listOfTokens = firstPart.split(",");
    if (listOfTokens.length > 1) {
      listOfTokens.pop();
    }
    let newFirstPart = listOfTokens.join(",");

    return firstPart.split(",").length > 1 ? `${newFirstPart}k` : newFirstPart;
  }
  const priceChange = (index) => {
    setPriceIndex(index);
  };
  const mainChange = (index) => {
    setMainIndex(index);
  };
  const mainSecondaryChange = (ele) => {
    if (ele == "Market Cap") {
      setMainSecondaryIndex("marketcap_usd");
    } else if (ele == "Social Volume") {
      setMainSecondaryIndex("sociaVolume");
    } else if (ele == "Active Wallets") {
      setMainSecondaryIndex("active_addresses");
    }
  };
  const socialChange = (index) => {
    setSocialIndex(index);
  };
  const networkChange = (index) => {
    setNetworkIndex(index);
  };
  const developerChange = (index) => {
    setDeveloperIndex(index);
  };
  const sentimentChange = (index) => {
    setSentimentIndex(index);
  };
  const calculatePercentage = (value, days) => {
    let num1 = value;
    let num2 = days[days.length - 1]?.value;
    let diff = num1 - num2;
    let div = diff / num1;
    let percentage = div * 100;
    return percentage;
  };
  const nullValues = (value) => {
    if (value == null) return "Coming Soon";
    else return Number(value).toFixed(3);
  };
  const oneDayPercentage = (value, days) => {
    let num1 = value;
    let num2 = days[days.length - 2]?.value;
    let diff = num1 - num2;
    let div = diff / num1;
    let percentage = div * 100;
    // if(percentage) {
    //   return `${Math.floor(percentage)}${getAfterDecimalValue(percentage)}`
    // } else {
    //   return 0
    // }
    return Math.floor(value);
  };
  const colorChange = (value) => {
    const str = value.toString();
    const changeSymbol = str[0];
    if (changeSymbol == "-") {
      return "red";
    }
    return "lightGreen";
  };
  const getAfterDecimalValue = (num) => {
    if (!num) {
      return;
    }
    let str = JSON.stringify(num);
    let newStr = str.split(".")[1];
    return newStr.slice(0, 2);
  };

  const fakeModalOpen = false;

  return (
    <div
      className={`p-5 px-10 relative overflow-y-scroll overflow-x-hidden w-screen h-screen transitionClass bg-gradient-to-tl from-bg via-bgl1 to-darkPurple justify-between flex flex-col ${
        fakeModalOpen ? "pr-[31vw]" : "pr-[100px]"
      }`}
    >
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {!fakeModalOpen ? (
        <div
          className={`grid ${
            fakeModalOpen ? "grid-cols-1" : "grid-cols-2 h-[30%]"
          }`}
        >
          <div className={`flex basis-1/2 mt-5`}>
            <div style={{ flex: 1 }}>
              <div className="flex items-center">
                <p className="text-3xl font-mont text-white font-bold">
                  {data?.slug}
                </p>
                <p className="text-[29px] ml-[10px] font-bold font-mont text-white opacity-20">
                  {data?.ticker}
                </p>
              </div>
              <p className="font-mont text-white text-sm mt-8 pr-[40px]">
                {data?.description}
              </p>
            </div>
            <div className="flex-col justify-between text-white flex justify-">
              <div className="priceBorder p-[1px]">
                <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                  <p className="text-[12px] ">Price</p>
                  <p className="text-[18px] ml-[5px]">$</p>
                  <p className="text-[25px] font-bold">
                    {Math.floor(data?.price?.value)}
                  </p>
                  <p className="text-[15px] font-bold">
                    .{getAfterDecimalValue(data?.price?.value)}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="priceBorder p-[1px]">
                  <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                    <p className="text-[12px] ">Deposit</p>
                  </div>
                </div>
                <div className="priceBorder p-[1px] ml-[10px]">
                  <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                    <p className="text-[12px] ">Withdraw</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-end">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]"
                >
                  Trade Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 w-[100%] ml-5">
            {[
              {
                title: "Market Cap",
                logo: require("../../assets/marketCapIcon.png"),
                value: numFormatter(marketCap),
              },
              {
                title: "Transaction Volume",
                logo: require("../../assets/transactionVolumeIcon.png"),
                value: numFormatter(transactionVolumePerct),
              },
              {
                title: "NVT Ratio",
                logo: require("../../assets/nvtRatioIcon.png"),
                value: numFormatter(nvtRatioPerct),
              },
              {
                title: "Trading Volume",
                logo: require("../../assets/tradingVolumeIcon.png"),
                value: numFormatter(tradingVolume),
              },
              {
                title: "Active Wallet Addresses",
                logo: require("../../assets/activeWalletAddressIcon.png"),
                value: numFormatter(activeAddressPerct),
              },
              {
                title: "Daily Active Addresses",
                logo: require("../../assets/dailyActiveAddressIcon.png"),
                value: numFormatter(dailyActivePerct),
              },
            ].map((ele) => (
              <div className="flex items-center">
                <img src={ele.logo} />
                <div className="ml-[-15px] font-mont text-white">
                  <p className="text-[9px]">{ele.title}</p>
                  <p className="text-[22px] font-bold">{ele.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`grid ${
            fakeModalOpen ? "grid-cols-1 h-auto" : "grid-cols-2 h-[30%]"
          }`}
        >
          <div className={`flex basis-1/2 mt-5`}>
            <div style={{ flex: 1 }}>
              <div className="flex items-center">
                <p className="text-3xl font-mont text-white font-bold">
                  {data?.slug}
                </p>
                <p className="text-[29px] ml-[10px] font-bold font-mont text-white opacity-20">
                  {data?.ticker}
                </p>
              </div>
              <p className="font-mont text-white text-sm mt-8 pr-[40px]">
                {data?.description}
              </p>
            </div>
            <div className="flex-col justify-between text-white flex justify-">
              <div className="priceBorder p-[1px]">
                <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                  <p className="text-[12px] ">Price</p>
                  <p className="text-[18px] ml-[5px]">$</p>
                  <p className="text-[25px] font-bold">
                    {Math.floor(data?.price?.value)}
                  </p>
                  <p className="text-[15px] font-bold">
                    .{getAfterDecimalValue(data?.price?.value)}
                  </p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="priceBorder p-[1px]">
                  <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                    <p className="text-[12px] ">Deposit</p>
                  </div>
                </div>
                <div className="priceBorder p-[1px] ml-[10px]">
                  <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                    <p className="text-[12px] ">Withdraw</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-end mt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]"
                >
                  Trade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex ${
          fakeModalOpen ? "pt-[20px] pb-[20px]" : "justify-end"
        } space-x-8`}
      >
        {["1d", "7d", "30d"].map((ele) => (
          <div
            className={`cursor-pointer text-[12px] text-white font-mont w-[70px] flex justify-center items-center ${
              ele === priceIndex ? "bg-regularPurple rounded-full p-1" : ""
            }`}
            onClick={() => setPriceIndex(ele)}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10 items-stretch">
        <div className="h-full">
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            {[
              {
                name: "Market Cap",
                value: data?.marketcap_usd,
                annotation: "marketcap",
              },
              {
                name: "Social Volume",
                value: data?.sociaVolume,
                annotation: "socialvolume",
              },
              {
                name: "Active Wallets",
                value: data?.active_addresses,
                annotation: "activeaddresses",
              },
            ].map((ele) => (
              <div
                onClick={() => setFirstBoxAnnotation(ele.annotation)}
                className={`cursor-pointer ${
                  ele.annotation === firstBoxAnnotation
                    ? "bg-regularPurple"
                    : ""
                } rounded-full px-2 `}
              >
                {ele.name}
              </div>
            ))}
          </div>
          <div
            className={`flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl ${
              fakeModalOpen ? "h-[350px]" : "h-[226px]"
            } items-center p-[1px] mt-4 w-full`}
          >
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              {firstBoxAnnotation === "marketcap" && (
                <CustomAreaChart
                  width={"100%"}
                  height={"98%"}
                  data={arrGen(data?.marketcap_usd[`change_${priceIndex}`])}
                />
              )}
              {firstBoxAnnotation === "socialvolume" && (
                <CustomAreaChart
                  width={"100%"}
                  height={"98%"}
                  data={arrGen(data?.sociaVolume[`change_${priceIndex}`])}
                />
              )}
              {firstBoxAnnotation === "activeaddresses" && (
                <CustomAreaChart
                  width={"100%"}
                  height={"98%"}
                  data={arrGen(data?.active_addresses[`change_${priceIndex}`])}
                />
              )}
            </div>
          </div>
        </div>
        {!fakeModalOpen ? (
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{ transform: "translateX(20px)" }}>Price Action</p>
            </div>
            <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl items-center h-[230px] p-[1px] mt-4 w-full">
              <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
                <CustomAreaChart
                  width={"100%"}
                  height={"98%"}
                  data={arrGen(data?.price[`change_${priceIndex}`])}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex  rounded-2xl items-center p-[1px] mt-[38px] w-full">
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              <div className="grid grid-cols-2 w-[100%]">
                {[
                  {
                    title: "Market Cap",
                    logo: require("../../assets/marketCapIcon.png"),
                    value: numFormatter(marketCap),
                  },
                  {
                    title: "Transaction Volume",
                    logo: require("../../assets/transactionVolumeIcon.png"),
                    value: `${numFormatter(transactionVolumePerct)}`,
                  },
                  {
                    title: "NVT Ratio",
                    logo: require("../../assets/nvtRatioIcon.png"),
                    value: numFormatter(nvtRatioPerct),
                  },
                  {
                    title: "Trading Volume",
                    logo: require("../../assets/tradingVolumeIcon.png"),
                    value: numFormatter(tradingVolume),
                  },
                  {
                    title: "Active Wallet Addresses",
                    logo: require("../../assets/activeWalletAddressIcon.png"),
                    value: numFormatter(activeAddressPerct),
                  },
                  {
                    title: "Daily Active Addresses",
                    logo: require("../../assets/dailyActiveAddressIcon.png"),
                    value: numFormatter(dailyActivePerct),
                  },
                ].map((ele) => (
                  <div className="flex items-center">
                    <img src={ele.logo} />
                    <div className="ml-[-15px] font-mont text-white">
                      <p className="text-[9px]">{ele.title}</p>
                      <p className="text-[22px] font-bold">{ele.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`grid ${
          fakeModalOpen ? "grid-cols-2" : "grid-cols-4"
        } gap-8 mt-4`}
      >
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Social Dominance</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomAreaChart
                data={arrGen(data?.socialDominance[`change_${priceIndex}`])}
                width={"100%"}
                height={"98%"}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Network Growth</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px] bg-bgl1">
              <CustomAreaChart
                data={arrGen(data?.networkGrowth[`change_${priceIndex}`])}
                width={"100%"}
                height={"98%"}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Market Sentiment</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart
                data={arrGen(
                  data?.sentiment_positive_total[`change_${priceIndex}`]
                )}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Dev Activity</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart
                data={arrGen(data?.dev_activity[`change_${priceIndex}`])}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeLoader: () => dispatch({type: types.CLOSE_LOADER}),
    openLoader: () => dispatch({type: types.OPEN_LOADER})
  }
}

export default connect(null, mapDispatchToProps)(CoinDesc);
