import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadTimeZones = createAsyncThunk('/timeZones/loadTimeZones', async (data, { rejectWithValue }) => {
  try {
    const res = await axios.get('/api/time-zones');
    return res.data;
  } catch (error) {
    return rejectWithValue({ status: error.response.status, data: error.response.data });
  }
});

const initialState = {
  loading: true,
  error: null,
  timeZones: []
};

export const TimeZonesSlice = createSlice({
  name: 'timeZones',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadTimeZones.fulfilled, (state, action) => {
        state.loading = false;
        state.timeZones = action.payload;
      })
      .addCase(loadTimeZones.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTimeZones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const selectTimeZones = (state) => state.timeZones;

export default TimeZonesSlice.reducer;
