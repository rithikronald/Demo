import "./style.css";
import marketCapLogo from "../../assets/marketCapLogo.png";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

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
    <AreaChart
      width={props.width}
      height={props.height}
      data={data}
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
      <XAxis dataKey="name" />
      <YAxis tickCount={4} />
      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#805DE3"
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
};

const data03 = [
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

const CustomLineChart = (props) => {
  return (
    <LineChart
      width={props.width}
      height={props.height}
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
  );
};

const CoinDesc = () => {
  return (
    <div className="p-5 overflow-hidden w-screen h-screen bg-bgl1">
      <div className="flex justify-end space-x-10">
        {["1W", "1M", "3M", "1Y", "ALL"].map((ele) => (
          <div
            className={`text-[12px] text-white font-mont w-[70px] flex justify-center items-center ${
              ele === "1Y" ? "bg-regularPurple rounded-full p-2" : ""
            }`}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[20px] text-white">
        <div className="grid grid-cols-[70%_30%]">
          <div>
            <p className="text-3xl font-mont text-white font-bold">
              Bitcoin BTC
            </p>
            <p className="font-mont text-white text-sm pt-[15px] pr-[40px]">
              Bitcoin is a decentralized digital currency that can be
              transferred on the peer-to-peer bitcoin network. Bitcoin
              transactions are verified by network nodes through cryptography
              and recorded in a public distributed ledger called a blockchain.
            </p>
          </div>
          <div className="flex-col">
            <div className="priceBorder p-[1px]">
              <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                <p className="text-[12px]">Price</p>
                <p className="text-[18px] ml-[5px]">$</p>
                <p className="text-[25px] font-bold">40123</p>
                <p className="text-[15px] font-bold">.79</p>
              </div>
            </div>
            <div className="h-[50%] flex justify-center items-end">
              <button className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]">
                Trade Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-3 grid-rows-2"
          style={{ transform: "translateY(-15px)" }}
        >
          {[
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
          ].map((ele) => (
            <div className="flex items-center">
              <img src={ele.logo} />
              <div
                className="ml-3 font-mont text-white"
                style={{ transform: "translateX(-28px)" }}
              >
                <p className="text-[9px]">{ele.title}</p>
                <p className="text-[25px] font-bold">{ele.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[20px]">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p>Market Cap</p>
            <p className="bg-regularPurple rounded-full px-2 ">Social Volume</p>
            <p>Social Volume</p>
          </div>
          <div className="flex newGraphBorder2 items-center h-[180px] p-[1px] mt-[15px]">
            <div className="newGraphBorderInner2 flex items-center bg-bgl1 h-[178px] w-full">
              <CustomAreaCharts width={670} height={150} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Price Action</p>
          </div>
          <div className="flex newGraphBorder2 items-center h-[180px] p-[1px] mt-[15px]">
            <div className="newGraphBorderInner2 flex items-center bg-bgl1 h-[178px] w-full">
              <CustomAreaCharts width={670} height={150} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-[40px]">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Social Dominance</p>
          </div>
          <div className="h-[130px] mt-[15px] p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomAreaCharts width={340} height={100} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Network Growth</p>
          </div>
          <div className="h-[130px] mt-[15px] p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomAreaCharts width={340} height={100} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Market Sentiment</p>
          </div>
          <div className="h-[130px] mt-[15px] p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart width={340} height={100} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Dev Activity</p>
          </div>
          <div className="h-[130px] mt-[15px] p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart width={340} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDesc;
