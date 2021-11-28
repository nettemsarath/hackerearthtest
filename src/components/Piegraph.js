import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getRandomColor } from "helpers/getRandomColor";

const Piegraph = ({ graphData, title, id, type, handleUpdateGraphItem }) => {
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
          value: element,
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
