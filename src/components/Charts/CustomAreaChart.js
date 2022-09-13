import { Tooltip } from "flowbite-react";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
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

export const CustomAreaChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <AreaChart
        data={props.data || data}
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
        <XAxis
          style={{ fontSize: 12 }}
          axisLine={false}
          stroke={"#595959"}
          dataKey="name"
        />
        <YAxis
          style={{ fontSize: 12 }}
          axisLine={false}
          stroke={"#595959"}
          tickCount={4}
        />
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
