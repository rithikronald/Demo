import "./style.css";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useNavigate } from "react-router-dom";
import { GradientContainer } from "../GradientContainer";
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
export const IndexDetails = (props) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p className="text-white font-semibold text-center  text-2xl 2xl:text-2xl 3xl:text-5xl">
          {props?.indexData?.basketName}
        </p>
        <p className="text-sm text-center text-white font-medium 3xl:text-3xl ">
          Token Composition
        </p>
      </div>
      <GradientContainer
        width="w-full"
        height="h-[72%]"
        className={"my-5 2xl:h-[60%]"}
        children={
          <div className="  w-full h-full rounded-2xl flex flex-col justify-around pt-4">
            <div className="flex justify-center items-center relative">
            <PieChart
                      width={width > 1600 ? 240 : 220}
                      height={height > 768 ? 240 : 200}
                      // style={{backgroundColor:"red"}}
                    >
                      <Pie
                        data={data02}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={width > 1600 ? 85 : 70}
                        outerRadius={width > 1600 ? 105 : 90}
                        strokeWidth={0}
                      >
                        {data02.map((ele) => (
                          <Cell fill={ele.color} />
                        ))}
                      </Pie>
                    </PieChart>
              <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="font-mont text-white font-[18px]">
                  {props?.indexData?.coins?.[0]}
                </p>
                <p className="font-mont text-white font-bold text-[30px] mt-[-10px]">
                  22%
                </p>
              </div>
            </div>
            <div className="coinList grid grid-cols-2 gap-x-2 p-[20px_20px_40px_20px] overflow-scroll">
              {props?.indexData?.coins?.map((item, index) => {
                const data = getCoinMeta(item);
                return (
                  <div className="flex items-center mt-[20px] w-[100%] px-3">
                    <img
                      alt="btc"
                      className="h-10 w-10 3xl:h-14 3xl:w-14 bg-white rounded-full"
                      src={data?.logoUrl}
                    />
                    <div className="pl-[6px]">
                      <p className="font-mont text-white text-[10px] 3xl:text-xl">
                        {data?.slug}
                      </p>
                      <div className="h-[6px] w-[20px] rounded-lg bg-yellow-400"></div>
                      <p className="font-medium text-white text-sm 3xl:text-xl">
                        22%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      />
      <div className="flex space-x-2">
        <button
          onClick={() =>
            navigate("/transactionSummary", {
              state: { indexData: props?.indexData },
            })
          }
          className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center"
        >
          Buy
        </button>
        <button
          onClick={() => props?.onClick()}
          className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center"
        >
          SIP
        </button>
      </div>
    </>
  );
};
