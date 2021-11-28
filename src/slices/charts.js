import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchChartData } from "services/chartData";
import { getRandomColor } from "helpers/getRandomColor";

export const fetchUsersData = createAsyncThunk("charts/get", async () => {
  const chartdata = await fetchChartData();
  const newData = chartdata.map((data, index) => {
    return {
      type: data.type,
      id: index,
      elements: data.elements.map((element) => {
        return {
          value: element,
          color: getRandomColor(),
        };
      }),
    };
  });
  return newData;
});

const initialData = {
  loading: false,
  chartdata: [],
  error: false,
};

const chartSlice = createSlice({
  name: "charts",
  initialState: initialData,
  reducers: {
    addItem: (state, action) => {
      console.log("action.payload", action.payload);
      state.chartdata.push(action.payload);
    },
    updateItem: (state, action) => {
      console.log("action.payload", action.payload);
      state.chartdata[action.payload.id] = action.payload;
    },
    removeItem: (state, action) => {
      state.chartdata.filter((data) => data.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchUsersData.pending](state, action) {
      state.loading = true;
    },
    [fetchUsersData.fulfilled](state, action) {
      state.loading = false;
      state.chartdata = action.payload;
    },
    [fetchUsersData.rejected](state, action) {
      state.loading = false;
      state.error = true;
    },
  },
});

export default chartSlice.reducer;

export const { addItem, removeItem, updateItem } = chartSlice.actions;
