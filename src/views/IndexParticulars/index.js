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

const data03 = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomAreaCharts = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <AreaChart
        data={data03}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis axisLine={false} stroke={"#595959"} dataKey="name" />
        <YAxis axisLine={false} stroke={"#595959"} tickCount={4} />
        <CartesianGrid strokeDasharray="3 3" stroke="#282929" />
        <Tooltip />
        <Area
          dot={true}
          type="monotone"
          dataKey="uv"
          stroke="#805DE3"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomLineChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart
        data={data03}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line
          type="monotone"
          dataKey="pv"
          dot={false}
          strokeWidth={3}
          stroke="#E323FF"
        />
        <Line
          type="monotone"
          dataKey="uv"
          dot={false}
          strokeWidth={3}
          stroke="#4DFFDF"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Indexes = () => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
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
                    children={
                      <CustomAreaCharts width={"100%"} height={"90%"} />
                    }
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
      </div>
    </div>
  );
};
export default Indexes;
