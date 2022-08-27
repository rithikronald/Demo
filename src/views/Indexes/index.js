import "./style.css";
import cardBackground from "../../assets/bg.png";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import {useNavigate} from 'react-router-dom'
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
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const IndexChart = () => {
  return (
    <LineChart width={280} height={150} data={data03}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <Line type="monotone" dataKey="pv" dot={false} strokeWidth={3} stroke="#fff" />
  <Line type="monotone" dataKey="uv" dot={false} strokeWidth={3} stroke="#AF52DE" />
</LineChart>
  )
}

const Indexes = () => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-[65%_35%] overflow-hidden w-screen h-screen bg-bgl2">
      <div className="p-10 pt-[7%] overflow-hidden bg-bgl1">
        <p className="text-white font-bold font-mont text-[29px] ">Indexes</p>
        <p className="text-white opacity-30 font-bold font-mont text-[14px] rightTextAlign">
          Sort By
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map(() => (
            // <div className="priceBorder p-[1px]">
            //   <div className="bg-bgl1 priceBorderOnly">
            //     <p className="text-[15px] font-bold">.79</p>
            //   </div>
            // </div>
            <div className="h-[280px] mt-4 rounded-[14px] priceBorder priceBorderOnly p-[1px]">
              <div className="bg-bg rounded-[18px] h-full flex flex-col justify-between p-2">
                <div className="flex items-end bg-gradient-to-tl from-right via-left to-top h-[200px] w-full rounded-2xl">
                  <IndexChart />
                </div>
                <div className="flex justify-between items-center mt-[20px]">
                  <div className="flex py-2 space-x-1">
                    <img
                      className="w-6"
                      alt="btc"
                      src={require("../../assets/btc.png")}
                    />
                    <img
                      alt="eth"
                      className="w-6"
                      src={require("../../assets/eth.png")}
                    />
                    <img
                      alt="bnb"
                      className="w-6"
                      src={require("../../assets/bnb.png")}
                    />
                  </div>
                  <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 rounded-3xl p-0.5">
                    <button onClick={()=>navigate('/indexes/indexId')} className="flex bg-bg  rounded-3xl text-white w-full justify-center items-center font-mont text-[12px] p-[10px]">
                      VIEW INDEX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[40px] p-4">
        <p className="font-mont text-white text-[16px] text-center">
          Token Composition of
        </p>
        <p className="font-mont text-white text-[29px] font-bold text-center mt-[5px]">
          Gaming Index
        </p>
        <div className="mt-[20px] rounded-[14px] priceBorder priceBorderOnly p-[1px] mx-[20px]">
          <div className="bg-bgl2 rounded-[18px] h-full flex flex-col justify-between p-2">
            <div className="flex justify-center items-center relative">
              <PieChart width={200} height={200}>
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                >
                  {data02.map((ele) => (
                    <Cell fill={ele.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="font-mont text-white font-[18px]">BTC</p>
                <p className="font-mont text-white font-bold text-[30px] mt-[-10px]">22%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-[20px_20px_40px_20px]">
              {[1, 2, 3, 4, 5, 6].map((ele) => (
                <div className="flex justify-center items-center mt-[20px]">
                  <img
                    className="h-[44px] w-[44px]"
                    src={require("../../assets/btcLight.png")}
                  />
                  <div className="pl-[10px]">
                    <p className="font-mont text-white text-[10px]">BITCOIN</p>
                    <div className="h-[6px] w-[20px] rounded-lg bg-yellow-400"></div>
                    <p className="font-mont text-white text-[19px]">BTC</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button onClick={()=>navigate('/transactionSummary')} className="bg-primaryButton text-white text-[20px] font-bold font-mont flex justify-center items-baseline rounded-xl py-[24px] mx-[20px] investButtonWidth mt-[20px]">
          Invest Now
        </button>
      </div>
    </div>
  );
};
export default Indexes;
