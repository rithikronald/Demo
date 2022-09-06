import "./style.css";
import cardBackground from "../../assets/bg.png";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  AreaChart,
  Area,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import marketCapLogo from "../../assets/marketCapLogo.png";
import { useNavigate } from "react-router-dom";
import { GradientContainer } from "../../components/GradientContainer";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useLocation } from "react-router-dom";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { IndexDetails } from "../../components/RightComponent/indexDetails";
import { useEffect, useState } from "react";
import SetupSIP from "../../components/RightComponent/setupSIP";

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
        <div className="h-1/4 grid grid-cols-2 mt-[20px] text-white">
          <div className="flex flex-col">
            <p className="text-3xl font-mont text-white font-bold">
              Gaming Index
            </p>
            <p className="font-mont text-white text-sm pr-[15px]">
              Crypto gaming is on the rise, {"&"} gaming coins are becoming a
              popular choice as an investment. Play to earn is an emerging
              gaming model that rewards players in cryptocurrencies
            </p>
          </div>

          <div
            className="grid grid-cols-2 justify-between"
            style={{ transform: "translateY(-15px)" }}
          >
            {[
              {
                title: "Active Wallet Addresses",
                logo: marketCapLogo,
                value: "12039",
              },
              {
                title: "Daily Active Addresses",
                logo: marketCapLogo,
                value: "752",
              },
              {
                title: "Transation Volume",
                logo: marketCapLogo,
                value: "2346k",
              },
              {
                title: "NVT Ratio",
                logo: marketCapLogo,
                value: "120",
              },
            ].map((ele) => (
              <div className="flex items-center">
                <img src={ele.logo} />
                <div
                  className="ml-3 font-mont text-white"
                  style={{ transform: "translateX(-28px)" }}
                >
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
        <div className="flex flex-col h-full">
          <div className="flex space-x-10 mt-[40px] ">
            {["1W", "1M", "3M", "1Y", "ALL"].map((ele) => (
              <div
                className={`text-[10px] text-white font-mont w-[50px] flex justify-center items-center ${
                  ele === "1Y" ? "bg-regularPurple rounded-full p-2" : ""
                }`}
              >
                {ele}
              </div>
            ))}
          </div>
          <div className="flex  flex-wrap  h-full justify-between mt-5">
            {[{ name: "Price Action" }, { name: "Network Growth" }].map(
              (item) => (
                <div className="flex flex-col w-[45%]">
                  <p className="text-white">{item.name}</p>
                  <GradientContainer
                    height="h-[70%]"
                    width="w-full"
                    className={"mt-3"}
                    children={<CustomAreaChart width={"100%"} height={"90%"} />}
                  />
                </div>
              )
            )}
            {[1, 2].map((item) => (
              <div className="flex flex-col w-[45%]">
                <p className="text-white">Price Action</p>
                <GradientContainer
                  height="h-[70%]"
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
