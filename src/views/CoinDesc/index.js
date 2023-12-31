import moment from "moment";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { maximumInstance, ws } from "../../App";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { GradientContainer } from "../../components/GradientContainer";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import types from "../../store/types";
import { getCurrentPrice } from "../../utility/getCurrentPrice";
import { numFormatter } from "../../utility/kFormatter";
import Modal from "./modal";
// var WebSocketClient = require("websocket").w3cwebsocket;
// const WS_URL = "wss://api.gateio.ws/ws/v4/";

const CoinDesc = (props) => {
  // const coinWs = new WebSocketClient(WS_URL);
  const [data, setData] = useState();
  const { height, width } = useWindowDimensions();
  const [priceIndex, setPriceIndex] = useState("1d");
  const [activeAddressPerct, setActiveAddressPerct] = useState(0);
  const [dailyActivePerct, setDailyActivePerct] = useState(0);
  const [transactionVolumePerct, setTransactionVolumePerct] = useState(0);
  const [nvtRatioPerct, setNvtRatioPerct] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [tradingVolume, setTradingVolume] = useState(0);
  const [firstBoxAnnotation, setFirstBoxAnnotation] = useState("socialvolume");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPrice, setCurrentPrice] = useState();
  const [tempPrice, setTempPrice] = useState();
  const [metaData, setMetaData] = useState();
  const location = useLocation();
  const params = useParams();

  function onmessage(evt) {
    const data = JSON.parse(evt?.data);
    // console.log("CoinDesc", data?.result?.currency_pair, data?.result?.last);
    const coinName = data?.result?.currency_pair?.split("_")[0];

    if (coinName && coinName === location?.state?.coin) {
      setCurrentPrice(data?.result?.last);
    }
  }

  useEffect(() => {
    var array = JSON.stringify({
      time: new Date().getTime,
      channel: "spot.tickers",
      event: "subscribe",
      payload: [`${location?.state?.coin}_USDT`],
    });
    if (ws.readyState) {
      ws.send(array);
      ws.onmessage = onmessage;
    }
    if (modalOpen) {
      let array = JSON.stringify({
        time: new Date().getTime,
        channel: "spot.tickers",
        event: "unsubscribe",
        payload: [`${location?.state?.coin}_USDT`],
      });
      if (ws.readyState) {
        ws.send(array);
      }
    }
  }, [ws.readyState, modalOpen]);

  useEffect(() => {
    getCurrentPrice(location?.state?.coin)
      .then((res) => {
        setTempPrice(res?.price);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  useEffect(() => {
    if (location?.state?.coin) {
      let data = getCoinMeta(location?.state?.coin);
      setMetaData(data);
    }
  }, [location?.state?.coin]);

  useEffect(() => {
    props.openLoader();
    maximumInstance
      .get(`/getCoin/${params.coinId}`)
      .then((response) => {
        console.log("##########", response?.data);
        setData(response?.data);
        props.closeLoader();
        setActiveAddressPerct(
          response?.data?.sentiment_balance_telegram?.value[1]?.value
        );
        setDailyActivePerct(response?.data?.trending_words_rank?.value);
        setTransactionVolumePerct(
          response?.data?.sentiment_balance_reddit?.value[1]?.value
        );
        setNvtRatioPerct(response?.data?.twitter_followers?.value[1]?.value);
        setNvtRatioPerct(response?.data?.twitter_followers?.value[1]?.value);
        setMarketCap(response?.data?.marketcap_usd?.value);
        setTradingVolume(response?.data?.tradingVolume?.value);
        props.closeLoader();
      })
      .catch((err) => {
        console.log("error", err);
        props.closeLoader();
      });
  }, []);

  const arrGen = (arr) => {
    const tempArr = [];
    arr?.map((item, index) => {
      // console.log("Item......", item);
      tempArr.push({
        uv: item?.value,
        name: moment(item?.datetime).format("DDMMM YYYY"),
      });
    });
    return tempArr;
  };

  const oneDayPercentage = (value, days) => {
    let num1 = value;
    let num2 = days[days.length - 2]?.value;
    let diff = num1 - num2;
    let div = diff / num1;
    let percentage = div * 100;
    return Math.floor(value);
  };

  const getAfterDecimalValue = (num) => {
    if (!num) {
      return;
    }
    let str = JSON.stringify(num);
    let newStr = str.split(".")[1];
    return newStr.slice(0, 2);
  };

  return (
    <div
      className={`CoinDesc p-5 pl-[110px]  px-10 relative overflow-y-scroll overflow-x-hidden w-screen h-screen transitionClass bg-gradient-to-tl from-bg via-bgl1 to-darkPurple justify-center items-center flex flex-col pr-[100px]`}
    >
      <div
        className={`flex flex-col ${height > 800 ? "h-[800px]" : "h-screen"} ${
          width > 1440 ? "w-[1440px]" : "w-full"
        }  justify-between`}
      >
        <Modal
          ticker={data?.ticker}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          price={currentPrice}
        />
        <div className={`grid grid-cols-2`}>
          <div className={`flex basis-1/2 mt-5`}>
            <div style={{ flex: 1 }}>
              <div className="flex items-center">
                <p className="text-3xl font-mont text-white font-bold">
                  {metaData?.slug}
                </p>
                <p className="text-[29px] ml-[10px] font-bold font-mont text-white opacity-20">
                  {metaData?.ticker}
                </p>
              </div>
              <p className="font-mont text-white lg1:text-xs 2xl:text-sm mt-2 pr-[40px]">
                {metaData?.description}
              </p>
            </div>
            <div className="flex-col  self-center mt-[3%] text-white flex justify-">
              <div className="priceBorder p-[1px]">
                <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                  {/* <p className="text-[12px] ">Price</p> */}
                  <p className="text-[18px] ml-[5px]">$</p>
                  <p className="text-lg font-bold">
                    {currentPrice == null ? tempPrice : Number(currentPrice)}
                  </p>
                  {/* <p className="text-[15px] font-bold">
                    {currentPrice == null
                      ? getAfterDecimalValue(tempPrice)
                      : currentPrice?.split(".")[1]}
                  </p> */}
                </div>
              </div>
              <div className="flex my-4">
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
          <div className="grid grid-cols-3 grid-rows-2 items-center self-center mt-[5%] w-[100%] ml-5">
            {[
              {
                title: "Market Cap",
                logo: require("../../assets/marketCapIcon.png"),
                value: numFormatter(marketCap),
              },
              {
                title: "Reddit Sentiment",
                logo: require("../../assets/transactionVolumeIcon.png"),
                value: numFormatter(transactionVolumePerct),
              },
              {
                title: "Twitter Followers",
                logo: require("../../assets/nvtRatioIcon.png"),
                value: numFormatter(nvtRatioPerct),
              },
              {
                title: "Trading Volume",
                logo: require("../../assets/tradingVolumeIcon.png"),
                value: numFormatter(tradingVolume),
              },
              {
                title: "Telegram Sentiment",
                logo: require("../../assets/activeWalletAddressIcon.png"),
                value: numFormatter(activeAddressPerct),
              },
              {
                title: "Trending Words Rank",
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
        <div className={`flex justify-end space-x-8`}>
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
                  value: data?.active_addresses || data?.unique_social_volume,
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
            <GradientContainer
              height={"h-[226px]"}
              width="w-full"
              className={`flex items-center mt-4`}
            >
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
                  data={
                    data?.active_addresses?.value
                      ? arrGen(data?.active_addresses[`change_${priceIndex}`])
                      : arrGen(
                          data?.unique_social_volume[`change_${priceIndex}`]
                        )
                  }
                />
              )}
            </GradientContainer>
          </div>
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{ transform: "translateX(20px)" }}>Price Action</p>
            </div>
            <GradientContainer
              height={"h-[226px]"}
              width="w-full"
              className={`flex items-center mt-4 `}
            >
              <CustomAreaChart
                width={"100%"}
                height={"98%"}
                data={arrGen(data?.price[`change_${priceIndex}`])}
                isDollar={true}
              />
            </GradientContainer>
          </div>
        </div>
        <div className={`grid grid-cols-4 gap-8 mt-4 pb-10`}>
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{}}>Social Dominance</p>
            </div>
            <GradientContainer
              height={"h-[130px]"}
              width="w-full"
              className={`flex items-center mt-2 `}
            >
              <CustomAreaChart
                data={arrGen(data?.socialDominance[`change_${priceIndex}`])}
                width={"100%"}
                height={"98%"}
              />
            </GradientContainer>
          </div>
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{}}>
                {data?.active_holders_distribution_total?.change_1d?.length > 0
                  ? "Active Holders Distribution"
                  : "Social Volume Twitter"}
              </p>
            </div>
            <GradientContainer
              height={"h-[130px]"}
              width="w-full"
              className={`flex items-center mt-2 `}
            >
              <CustomAreaChart
                data={
                  data?.active_holders_distribution_total?.change_1d?.length > 0
                    ? arrGen(
                        data?.active_holders_distribution_total[
                          `change_${priceIndex}`
                        ]
                      )
                    : arrGen(data?.twitter_followers[`change_${priceIndex}`])
                }
                width={"100%"}
                height={"98%"}
              />
            </GradientContainer>
          </div>
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{}}>Market Sentiment</p>
            </div>
            <GradientContainer
              height={"h-[130px]"}
              width="w-full"
              className={`flex items-center mt-2 `}
            >
              <CustomLineChart
                data={arrGen(
                  data?.sentiment_positive_total[`change_${priceIndex}`]
                )}
                width={"100%"}
                height={"100%"}
              />
            </GradientContainer>
          </div>
          <div>
            <div
              className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
            >
              <p style={{}}>Dev Activity</p>
            </div>
            <GradientContainer
              height={"h-[130px]"}
              width="w-full"
              className={`flex items-center mt-2 `}
            >
              <CustomLineChart
                data={arrGen(data?.dev_activity[`change_${priceIndex}`])}
                width={"100%"}
                height={"100%"}
              />
            </GradientContainer>
          </div>
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

export default connect(null, mapDispatchToProps)(CoinDesc);
