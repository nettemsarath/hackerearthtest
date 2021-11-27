import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchChartData } from "services/chartData";

export const fetchUsersData = createAsyncThunk("charts/get", async () => {
  const data = await fetchChartData();
  return data;
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

export const { addItem, removeItem } = chartSlice.actions;