import { configureStore } from '@reduxjs/toolkit';
import timeZoneReducer from '../reducers/TimeZoneReducer';

export const store = configureStore({
  reducer: {
    timeZones: timeZoneReducer
  }
});

export default store;
