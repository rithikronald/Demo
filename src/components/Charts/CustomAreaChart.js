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
import { numFormatter } from "../../utility/kFormatter";

export const CustomTooltip = ({ active, payload, label, isDollar }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-black text-white font-mont rounded-lg p-2 text-xs font-semibold">
        <p className="underline">{payload[0]?.payload?.name}</p>
        <p className="label mt-2">{`${isDollar ? "$" : ""}${numFormatter(
          Number(payload[0].value).toFixed(2)
        )}`}</p>
      </div>
    );
  }

  return null;
};

export const DataFormater = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
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
          axisLine={false}
          stroke={"#595959"}
          tickCount={6}
          width={30}
          tick={{ fontSize: 10, fontWeight: "normal", fill: "#eff1ed" }}
          tickFormatter={DataFormater}
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
        <Tooltip content={<CustomTooltip isDollar={props?.isDollar} />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
