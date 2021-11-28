import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "slices/charts";

const CustomGraph = () => {
  const dispatch = useDispatch();
  const { chartdata: customchartData } = useSelector((state) => state.charts);
  console.log("customchartData", customchartData);
  useEffect(() => {
    const newItem = {
      id: 1,
      type: "Bar",
      elements: [
        { value: 1, color: "#1CCCD0" },
        { value: 9, color: "#9ECD71" },
        { value: 9, color: "#E32F05" },
      ],
    };
    // dispatch(updateItem(newItem));
  }, []);

  return <div>CustomGraph...</div>;
};

export default CustomGraph;
