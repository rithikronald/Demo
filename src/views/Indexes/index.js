import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import "./style.css";
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

const Indexes = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const [basketData, setBasketData] = useState();
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/getAllIndexes`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setCoinList(response?.data?.coins);
        setBasketData(response?.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    // const list = coinList?.map((item) => {
    //   return getCoinMeta(item);
    // });
    // console.log("List", list);
    console.log("CoinList", coinList);
  }, [coinList]);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4 overflow-scroll">
        <div className="flex w-full justify-between">
          <p className="text-white font-bold font-mont text-[29px] ">Indexes</p>
          <p className="text-white opacity-30 font-bold font-mont text-[14px]">
            Sort By
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 overflow-scroll">
          {basketData &&
            basketData?.map((item, index) => (
              <button
                onClick={() => navigate("/indexes/indexId")}
                className="w-[250px] h-56 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-80"
              >
                <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-2">
                  <div className="bg-gradient-to-tl from-right via-left to-top flex h-5/6 w-full rounded-2xl p-4">
                    <p className="text-white text-lg font-semibold">
                      {item?.basketName}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    {/* <div className="flex py-2 space-x-1">
                    {item?.coins?.map((item, index) => {
                      return (
                        index < 3 && (
                          <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                            <div className="flex w-full h-full justify-center items-center">
                              <img
                                className="w-6 rounded-full"
                                alt="btc"
                                src={item?.logoUrl}
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
                  </div> */}
                    <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-6 w-1/3 rounded-2xl p-[1px]">
                      <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center text-xs">
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </button>
            ))}
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
