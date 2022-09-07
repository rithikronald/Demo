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

const Indexes = () => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const location = useLocation();
  const [pageRightIndex, setPageRightIndex] = useState(0);

  useEffect(() => {
    console.log("PARAMS", location?.state?.indexData);
  }, [location]);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="h-[25%] flex mt-[20px] w-full text-white">
          <div className="flex flex-col w-1/2">
            <p className="text-3xl font-mont text-white font-bold">
              Gaming Index
            </p>
            <p className="font-mont text-white text-sm pr-[15px] mt-3">
              Crypto gaming is on the rise, {"&"} gaming coins are becoming a
              popular choice as an investment. Play to earn is an emerging
              gaming model that rewards players in cryptocurrencies
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 w-1/2">
            {[
              {
                title: "Active Wallet Addresses",
                logo: lg1,
                value: "12039",
              },
              {
                title: "Daily Active Addresses",
                logo: lg2,
                value: "752",
              },
              {
                title: "Transation Volume",
                logo: lg3,
                value: "2346k",
              },
              {
                title: "NVT Ratio",
                logo: lg4,
                value: "120",
              },
            ].map((ele) => (
              <div className="flex items-center">
                <img className="w-14 h-14" alt={"atr"} src={ele.logo} />
                <div className="font-mont text-white ml-2">
                  <p className="text-[9px]">{ele.title}</p>
                  <div className="flex items-end">
                    <p className="text-[25px] font-bold">{ele.value}</p>
                    <p
                      style={{ transform: "translateY(-5px)" }}
                      className="ml-3 text-[10px] font-mont font-bold text-red-600"
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
            {["1D", "7D", "30D"].map((ele) => (
              <button className="text-[10px] text-white font-mont w-[50px] rounded-full p-1 flex justify-center items-center focus:bg-purple-600">
                {ele}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap  h-full justify-between mt-5">
            {[{ name: "Price Action" }, { name: "Network Growth" }].map(
              (item) => (
                <div className="flex flex-col w-[48%]">
                  <p className="text-white">{item.name}</p>
                  <GradientContainer
                    height="h-[100%]"
                    width="w-full"
                    className={"mt-3"}
                    children={<CustomAreaChart width={"100%"} height={"90%"} />}
                  />
                </div>
              )
            )}
            {[{ name: "Market Sentiment" }, { name: "Dev Activity" }].map((item) => (
              <div className="flex flex-col w-[48%] mt-2">
                <p className="text-white">{item.name}</p>
                <GradientContainer
                  height="h-[100%]"
                  width="w-full"
                  className={"mt-3"}
                  children={<CustomLineChart width={"100%"} height={"90%"} />}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col sm:hidden xl:flex">
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
