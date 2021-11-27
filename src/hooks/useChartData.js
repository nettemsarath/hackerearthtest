import React, { useState, useEffect } from "react";
import axios from "axios";
const FETCHAPIURL = process.env.REACT_APP_TESTFETCHAPIURL;
// Geting CORS Error from the API so using Test Data
const TestData = [
  {
    type: "Bar",
    elements: [1, 9, 15, 3, 7, 9],
  },
  {
    type: "Bar",
    elements: [1, 9, 15, 3, 7, 9],
  },
  {
    type: "Pie",
    elements: [50, 50],
  },
  {
    type: "Pie",
    elements: [25, 25, 50],
  },
  {
    type: "Bar",
    elements: [1, 2, 3, 4, 5],
  },
  {
    type: "Pie",
    elements: [10, 20, 30, 40],
  },
  {
    type: "Pie",
    elements: [20, 20, 20, 20, 20],
  },
  {
    type: "Bar",
    elements: [20, 20, 20, 20, 20],
  },
  {
    type: "Bar",
    elements: [25, 25, 50],
  },
];

const useChartData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  };

  const fetchData = () => {
    setLoading(true);
    return axios
      .get(FETCHAPIURL, config)
      .then((data) => {
        setData(TestData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [loading, data, error];
};

export default useChartData;
