import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log("PARAMS", active, payload, label);
    return (
      <div className="custom-tooltip bg-black text-white font-mont rounded-lg p-2 text-xs font-semibold">
        <p className="underline">{payload[0]?.payload?.name}</p>
        <p className="label mt-2">{`$${Number(payload[0].value).toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export const CustomAreaChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <AreaChart
        data={props?.data}
        margin={{ top: 15, right: 18, left: 10, bottom: 10 }}
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
        <YAxis
          style={{ fontSize: 12 }}
          axisLine={false}
          stroke={"#595959"}
          tickCount={4}
          width={40}
        />
        <CartesianGrid strokeDasharray="3 3" stroke="#282929" />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#805DE3"
          strokeWidth={1.5}
          fillOpacity={0.5}
          fill="url(#colorUv)"
          dot={true}
        />
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
