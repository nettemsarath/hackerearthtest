import React from "react";
import Bargraph from "./Bargraph";
import Piegraph from "./Piegraph";
// import useChartData from "hooks/useChartData";
import CustomGraph from "./CustomGraph";
import { useDispatch, useSelector } from "react-redux";

const Graph = () => {
  // const [loading, data, error] = useChartData();
  const { chartdata, loading, error } = useSelector((state) => state.charts);
  console.log("chartData...chartData....", chartdata);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {chartdata.length && !loading ? (
        <div>
          {chartdata.map((chartdata, index) => {
            if (chartdata.type === "Bar") {
              return (
                <Bargraph
                  key={index}
                  data={chartdata.elements}
                  title="Bar Graph"
                />
              );
            } else if (chartdata.type === "Pie") {
              return (
                <Piegraph
                  key={index}
                  data={chartdata.elements}
                  title="Pie Graph"
                />
              );
            }
            return null;
          })}
        </div>
      ) : null}
      <CustomGraph />
    </div>
  );
};

export default Graph;
