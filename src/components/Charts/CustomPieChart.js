import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { pieColors } from "../../constants/constants";
import { useWindowDimensions } from "../../hooks/useWindowDimension";

export const CustomPieChart = (props) => {
  const { height, width } = useWindowDimensions();
  const [pieData, setpieData] = useState([]);
  useEffect(() => {
    const temp = [];
    console.log("DATA", props?.data?.coins);
    props?.data?.coins?.map((item, index) => {
      temp?.push({
        name: item,
        value: 22,
      });
    });
    setpieData(temp);
  }, [props]);

  useEffect(() => {
    console.log("PieData", pieData);
  }, [pieData]);

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
            innerRadius={height > 760 ? 80 : 70}
            outerRadius={height > 760 ? 100 : 90}
            strokeWidth={0}
          >
            {pieColors.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </ResponsiveContainer>
  );
};
