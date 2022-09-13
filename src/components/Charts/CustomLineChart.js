import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

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
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <XAxis style={{fontSize:12}} axisLine={false} /> */}
        {/* <CartesianGrid strokeDasharray="3 3" stroke="#282929" /> */}
        {/* <YAxis style={{fontSize:12}} axisLine={false} /> */}
        {/* <Line
          type="monotone"
          dataKey="pv"
          dot={false}
          strokeWidth={3}
          stroke="#E323FF"
        /> */}
        <Line
          type="monotone"
          dataKey="uv"
          dot={false}
          strokeWidth={2}
          stroke="#c2c2c2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
