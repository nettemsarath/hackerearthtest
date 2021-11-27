import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const CustomGraph = () => {
  const dispatch = useDispatch();
  const { chartdata: customchartData } = useSelector((state) => state.charts);
  console.log("customchartData", customchartData);

  return <div>CustomGraph...</div>;
};

export default CustomGraph;
