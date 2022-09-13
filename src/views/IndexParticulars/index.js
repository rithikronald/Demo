import "./style.css";
import lg1 from "../../assets/index1.png";
import lg2 from "../../assets/index2.png";
import lg3 from "../../assets/index3.png";
import lg4 from "../../assets/index4.png";

import { useNavigate } from "react-router-dom";
import { GradientContainer } from "../../components/GradientContainer";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useLocation } from "react-router-dom";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { IndexDetails } from "../../components/RightComponent/indexDetails";
import { useEffect, useState } from "react";
import SetupSIP from "../../components/RightComponent/setupSIP";
import axios from "axios";
import { kFormatter } from "../../utility/kFormatter";

const Indexes = () => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeWalletAddress, setActiveWalletAddress] = useState();
  const [dailyActiveAddress, setDailyActiveAddress] = useState();
  const [transactionVolume, setTransactionVolume] = useState();
  const [nvtRation, setNvtRation] = useState();
  const [pageRightIndex, setPageRightIndex] = useState(0);
  const [basketData, setBasketData] = useState();
  const [priceIndex, setPriceIndex] = useState("1d");

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/getIndex/${location?.state?.indexData?.basketName}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("Response", response?.data);
        setBasketData(response?.data?.basketData);
      })
      .catch((err) => console.log("error", err));
  }, [location]);

  useEffect(() => {
    console.log("transaction volume", basketData?.transaction_volume);
    console.log("K formatter", kFormatter(basketData?.transaction_volume));
  }, [basketData]);

  const arrGen = (arr) => {
    const monthsArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const tempArr = [];
    arr?.map((item, index) => {
      tempArr.push({ uv: item?.value, name: monthsArr[index] });
    });
    return tempArr;
  };

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont">
      <div className="Left p-10 px-16 flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="h-[25%] flex mt-[20px] w-full text-white">
          <div className="flex flex-col w-1/2">
            <p className="text-3xl  text-white font-bold">
              {location?.state?.indexData?.basketName}
            </p>
            <p className=" text-white text-sm pr-[15px] mt-3">
              Crypto gaming is on the rise, {"&"} gaming coins are becoming a
              popular choice as an investment. Play to earn is an emerging
              gaming model that rewards players in cryptocurrencies
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 w-1/2">
            {location?.state?.indexData &&
              [
                {
                  title: "Active Wallet Addresses",
                  logo: lg1,
                  value: kFormatter(basketData?.active_addresses),
                },
                {
                  title: "Daily Active Addresses",
                  logo: lg2,
                  value: kFormatter(basketData?.daily_active_addresses),
                },
                {
                  title: "Transation Volume",
                  logo: lg3,
                  value: kFormatter(basketData?.transaction_volume),
                },
                {
                  title: "NVT Ratio",
                  logo: lg4,
                  value: kFormatter(basketData?.nvt),
                },
              ].map((ele) => (
                <div className="flex items-center">
                  <img className="w-14 h-14" alt={"atr"} src={ele.logo} />
                  <div className=" text-white ml-2">
                    <p className="text-[9px]">{ele.title}</p>
                    <div className="flex items-end">
                      <p className="text-[25px] font-bold">{ele.value}</p>
                      <p
                        style={{ transform: "translateY(-5px)" }}
                        className="ml-3 text-[10px]  font-bold text-red-600"
                      >
                        32%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col h-[80%]">
          <div className="flex">
            {["1d", "7d", "30d"].map((ele) => (
              <button
                onClick={() => setPriceIndex(ele)}
                className={`text-[10px] text-white  w-[50px] rounded-full p-1 flex justify-center items-center ${priceIndex === ele ? "bg-purple-600" : ""}`}
              >
                {ele}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap  h-full justify-between mt-5">
            {[
              {
                name: "Price Action",
                data: arrGen(basketData?.price[`change_${priceIndex}`]),
              },
              {
                name: "Network Growth",
                data: arrGen(basketData?.networkGrowth[`change_${priceIndex}`]),
              },
            ].map((item) => (
              <div className="flex flex-col w-[48%]">
                <p className="text-white">{item.name}</p>
                <GradientContainer
                  height="h-[100%]"
                  width="w-full"
                  className={"mt-3"}
                >
                  <CustomAreaChart
                    data={item.data}
                    width={"100%"}
                    height={"90%"}
                  />
                </GradientContainer>
              </div>
            ))}
            {[
              {
                name: "Social Dominance",
                data: arrGen(
                  basketData?.socialDominance[`change_${priceIndex}`]
                ),
              },
              {
                name: "Dev Activity",
                data: arrGen(basketData?.dev_activity[`change_${priceIndex}`]),
              },
            ].map((item) => (
              <div className="flex flex-col w-[48%] mt-2">
                <p className="text-white">{item.name}</p>
                <GradientContainer
                  height="h-[100%]"
                  width="w-full"
                  className={"mt-3"}
                >
                  <CustomLineChart
                    width={"100%"}
                    height={"90%"}
                    data={item?.data}
                  />
                </GradientContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right basis-1/4  bg-gradient-to-tl from-bg via-maxPurple to-darkPurple p-10 justify-around flex flex-col sm:hidden xl:flex">
        {pageRightIndex == 0 && (
          <IndexDetails
            indexData={location?.state?.indexData}
            onClick={() => setPageRightIndex(1)}
          />
        )}
        {pageRightIndex == 1 && (
          <SetupSIP onClick={() => setPageRightIndex(0)} />
        )}
      </div>
    </div>
  );
};
export default Indexes;
