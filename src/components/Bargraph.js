import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import { getRandomColor } from "helpers/getRandomColor";

const Bargraph = ({ graphData, title, id, type, handleUpdateGraphItem }) => {
  const [enteredText, setEnteredText] = useState("");
  const handleChange = (e) => {
    setEnteredText(e.target.value);
  };
  const handleSubmit = () => {
    const newEnteredgraphvalues = enteredText.split(",");
    handleUpdateGraphItem({
      type: type,
      id: id,
      elements: newEnteredgraphvalues.map((element) => {
        return {
          value: parseInt(element),
          color: getRandomColor(),
        };
      }),
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div> {title} </div>
        <p> Edit values to see the changes in the Graph </p>
        <input
          placeholder="12,22,34,45,56"
          style={{ margin: "10px", padding: "5px" }}
          value={enteredText}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>

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
