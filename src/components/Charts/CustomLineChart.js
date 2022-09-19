import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip, DataFormater } from "./CustomAreaChart";

const data = [
  {
    name: "Jan",
    uv: 400,
    pv: 400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 5600,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Aug",
    uv: 2090,
    pv: 4300,
  },
  {
    name: "Sep",
    uv: 2490,
    pv: 3500,
  },
  {
    name: "Oct",
    uv: 3300,
    pv: 4100,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 2090,
    pv: 3560,
    amt: 1800,
  },
  {
    name: "Dec",
    uv: 4090,
    pv: 4000,
    amt: 1000,
  },
];

export const CustomLineChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart
        data={props.data || data}
        margin={{ top: 15, right: 18, left: 10, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#282929" />
        <Line
          type="monotone"
          dataKey="uv"
          dot={true}
          strokeWidth={2}
          stroke="#805DE3"
        />
        <YAxis
          axisLine={false}
          stroke={"#595959"}
          tickCount={6}
          width={30}
          tick={{fontSize:10,fontWeight:"normal",fill:"#eff1ed"}}
          tickFormatter={DataFormater}
        />
         <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};
