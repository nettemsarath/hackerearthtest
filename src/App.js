import React, { useEffect } from "react";
import "./App.css";
import Graph from "components/Graph";

import { useDispatch, useSelector } from "react-redux";

import { fetchUsersData } from "slices/charts";
// import { addItem, removeItem, getChartData } from "slices/charts";

function App() {
  const dispatch = useDispatch();
  console.log("getChartData");
  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);
  return (
    <div className="App">
      <div style={{ fontSize: "40px", color: "black" }}>
        <b>Graphs</b>
      </div>
      <Graph />
    </div>
  );
}

export default App;
