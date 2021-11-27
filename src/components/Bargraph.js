import React from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import { getRandomColor } from "helpers/getRandomColor";

const Bargraph = ({ data, title }) => {
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
      <BarChart
        width={500}
        height={250}
        data={graphData}
        margin={{ top: 25, right: 10, left: 0, bottom: 25 }}
      >
        <XAxis dataKey="value" fontFamily="sans-serif" tickSize dy="25" />
        <YAxis hide />

        <Bar dataKey="value" barSize={20} fontFamily="sans-serif">
          {graphData.map((entry) => (
            <Cell fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Bargraph;
