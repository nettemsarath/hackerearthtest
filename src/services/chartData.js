import axios from "axios";
const FETCHAPIURL = process.env.REACT_APP_TESTFETCHAPIURL;

const TESTDATA = [
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

const fetchChartData = async () => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = await axios.get(FETCHAPIURL, config);
    return TESTDATA;
  } catch (error) {
    throw error;
  }
};

export { fetchChartData };
