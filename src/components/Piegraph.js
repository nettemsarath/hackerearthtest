import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getRandomColor } from "helpers/getRandomColor";

const Piegraph = ({ data, title }) => {
  const graphData = data.map((chartdata) => {
    return {
      value: chartdata,
      color: getRandomColor(),
    };
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div> {title} </div>

      <PieChart width={600} height={400}>
        <Pie
          dataKey="value"
          valueKey="value"
          data={graphData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
        >
          {graphData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Piegraph;
