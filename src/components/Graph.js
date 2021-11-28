import React from "react";
import Bargraph from "./Bargraph";
import Piegraph from "./Piegraph";
// import useChartData from "hooks/useChartData";
import CustomGraph from "./CustomGraph";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "slices/charts";

const Graph = () => {
  // const [loading, data, error] = useChartData();
  const dispatch = useDispatch();
  const { chartdata, loading, error } = useSelector((state) => state.charts);
  const handleUpdateGraphItem = (newItem) => {
    dispatch(updateItem(newItem));
  };
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
                  type={chartdata.type}
                  id={chartdata.id}
                  graphData={chartdata.elements}
                  title="Bar Graph"
                  handleUpdateGraphItem={handleUpdateGraphItem}
                />
              );
            } else if (chartdata.type === "Pie") {
              return (
                <Piegraph
                  key={index}
                  type={chartdata.type}
                  id={chartdata.id}
                  graphData={chartdata.elements}
                  title="Pie Graph"
                  handleUpdateGraphItem={handleUpdateGraphItem}
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
