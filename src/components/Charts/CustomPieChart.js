import React, { useCallback, useEffect, useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import { pieColors } from "../../constants/constants";
import { useWindowDimensions } from "../../hooks/useWindowDimension";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        className="font-mont font-bold"
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fill={"#fff"}
      >
        {payload.name}
      </text>
      <text
        className="font-mont font-bold"
        x={cx + 3}
        y={cy - 5}
        dy={30}
        textAnchor="middle"
        fill={"#fff"}
      >
        {payload.value}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 1}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const label = payload[0]?.name
//     const value = payload[0]?.value
//     console.log("TOOLTIP",payload[0]?.name)
//     return (
//       <div className="custom-tooltip bg-white">
//         <p className="label">{`${label}`}</p>
//       </div>
//     );
//   }

//   return null;
// };

export const CustomPieChart = (props) => {
  const { height, width } = useWindowDimensions();
  const [pieData, setpieData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  useEffect(() => {
    const temp = [];
    props?.data?.coins?.map((item, index) => {
      temp?.push({
        name: item,
        value: Number((100 / props?.data?.coins?.length).toFixed(2)) ,
      });
    });
    setpieData(temp);
  }, [props]);

  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      {pieData && (
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={height > 800 ? 80 : 70}
            outerRadius={height > 800 ? 100 : 90}
            strokeWidth={0}
            paddingAngle={1}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
          >
            {pieColors.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item} />
            ))}
          </Pie>
          {/* <Tooltip content={<CustomTooltip />} /> */}
        </PieChart>
      )}
    </ResponsiveContainer>
  );
};
