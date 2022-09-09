import "./style.css";
import marketCapLogo from "../../assets/marketCapLogo.png";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const CoinDesc = (props) => {
  const [loaderOpen, setLoaderOpen] = useState(false);
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
  const [marketCap, setMarketCap] =  useState(0)
  const [tradingVolume, setTradingVolume] = useState(0)

  const params = useParams();

  useEffect(() => {
    setLoaderOpen(true);
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/getCoin?ticker=${params.coinId}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response);
        setData(response?.data);
        setLoaderOpen(false);
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
            response?.data?.marketcap_usd?.change_1d,
          )
        )
        setTradingVolume(
          oneDayPercentage(
            response?.data?.tradingVolume?.value, 
            response?.data?.tradingVolume?.change_1d, 
          )
        )
      })
      .catch((err) => console.log("error", err));
  }, []);

  const arrGen = (arr) => {
    const tempArr = [];
    arr?.map((item, index) => {
      // console.log("ITEM",item)
      tempArr.push(item?.value);
    });
    // console.log("TEMP ARR",tempArr)
    return tempArr;
  };

  function numberWithCommas(x) {
    if (!x) {
      return x;
    }
    let numbers = x.toString().split(".");
    let firstPart = Number(parseInt(numbers[0])).toLocaleString("en");

    return numbers[1] ? firstPart + "." + numbers[1] : firstPart;
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    // const resArr = arrGen(data?.price?.change_1d);
    // console.log("RES ARR", resArr);
  }, [data]);

  const priceChange = (index) => {
    setPriceIndex(index);
  };

  const mainChange = (index) => {
    setMainIndex(index);
  };

  const mainSecondaryChange = (ele) => {
    console.log("index", ele);
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
    console.log("Percentage", percentage);
    return percentage;
  };

  const nullValues = (value) => {
    if (value == null) return "Coming Soon";
    else return Number(value).toFixed(3);
  };

  const oneDayPercentage = (value, days) => {
    console.log('ONE DAY PERCENTAGE',value, days)
    let num1 = value;
    let num2 = days[days.length - 2]?.value;
    let diff = num1 - num2;
    let div = diff / num1;
    let percentage = div * 100;
    console.log("Percentage", percentage);
    // if(percentage) {
    //   return `${Math.floor(percentage)}${getAfterDecimalValue(percentage)}`
    // } else {
    //   return 0
    // }
    return Math.floor(value)
  };

  const colorChange = (value) => {
    console.log("VALUE", value);
    const str = value.toString();
    const changeSymbol = str[0];
    console.log("STRING", changeSymbol);
    if (changeSymbol == "-") {
      return "red";
    }
    return "lightGreen";
  };

  const getAfterDecimalValue = (num) => {
    if(!num) {
      return
    }
    let str = JSON.stringify(num)
    let newStr = str.split(".")[1]
    return newStr.slice(0,2)
  }

  return (
    <div className="p-5 px-10 overflow-hidden w-screen h-screen bg-bgl1 justify-between flex flex-col">
      <div className="flex justify-end space-x-8">
        {["1W", "1M", "3M", "1Y", "ALL"].map((ele) => (
          <div
            className={`text-[12px] text-white font-mont w-[70px] flex justify-center items-center ${
              ele === "1Y" ? "bg-regularPurple rounded-full p-1" : ""
            }`}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="flex  h-[30%]">
        <div className="flex basis-1/2 mt-5">
          <div style={{flex: 1}}>
            <div className="flex">
              <p className="text-3xl font-mont text-white font-bold">
                {data?.slug}
              </p>
              <div className="flex space-x-1 ml-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
            <p className="font-mont text-white text-sm mt-8 pr-[40px]">
              {data?.description}
            </p>
          </div>
          <div className="flex-col text-white flex justify-">
            <div className="priceBorder p-[1px]">
              <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                <p className="text-[12px] ">Price</p>
                <p className="text-[18px] ml-[5px]">$</p>
                <p className="text-[25px] font-bold">{Math.floor(data?.price?.value)}</p>
                <p className="text-[15px] font-bold">.{
                  getAfterDecimalValue(data?.price?.value)
                }</p>
              </div>
            </div>
            <div className="flex justify-center items-end mt-8">
              <button className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]">
                Trade Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 w-[50%] ml-5">
          {[
            {
              title: "Market Cap",
              logo: require('../../assets/marketCapIcon.png'),
              value: numberWithCommas(marketCap),
            },
            {
              title: "Transaction Volume",
              logo: require('../../assets/transactionVolumeIcon.png'),
              value: `${numberWithCommas(transactionVolumePerct)}k`,
            },
            {
              title: "NVT Ratio",
              logo: require('../../assets/nvtRatioIcon.png'),
              value: numberWithCommas(nvtRatioPerct),
            },
            {
              title: "Trading Volume",
              logo: require('../../assets/tradingVolumeIcon.png'),
              value: numberWithCommas(tradingVolume),
            },
            {
              title: "Active Wallet Addresses",
              logo: require('../../assets/activeWalletAddressIcon.png'),
              value: numberWithCommas(activeAddressPerct),
            },
            {
              title: "Daily Active Addresses",
              logo: require('../../assets/dailyActiveAddressIcon.png'),
              value: numberWithCommas(dailyActivePerct),
            },
          ].map((ele) => (
            <div className="flex items-center">
              <img src={ele.logo} />
              <div className="ml-[-15px] font-mont text-white">
                <p className="text-[9px]">{ele.title}</p>
                <p className="text-[25px] font-bold">{ele.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p>Market Cap</p>
            <p className="bg-regularPurple rounded-full px-2 ">Social Volume</p>
            <p>Social Volume</p>
          </div>
          <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl items-center h-[230px] p-[1px] mt-4 w-full">
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Price Action</p>
          </div>
          <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl items-center h-[230px] p-[1px] mt-4 w-full">
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-4">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Social Dominance</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomAreaChart width={"100%"} height={"98%"} />
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
              <CustomAreaChart width={"100%"} height={"98%"} />
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
              <CustomLineChart width={"100%"} height={"98%"} />
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
              <CustomLineChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDesc;
