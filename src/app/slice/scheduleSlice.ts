import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/store';
import { Schedule } from '../models/schedule';
import { scheduleAPI } from '../api/agent';

interface ScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  schedules: [],
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        getSchedulesStart(state) {
        state.loading = true;
        state.error = null;
        },
        getSchedulesSuccess(state, action: PayloadAction<Schedule[]>) {
        state.loading = false;
        state.schedules = action.payload;
        },
        getSchedulesFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const {
  getSchedulesStart,
  getSchedulesSuccess,
  getSchedulesFailure,
} = scheduleSlice.actions;

export const fetchSchedules = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getSchedulesStart());
      const response = await scheduleAPI.getSchedules();
      
      // Kiểm tra xem response có thuộc tính "data" không và có phải là một mảng không
      const scheduleArray = Array.isArray(response.data) ? response.data : [];
  
      dispatch(getSchedulesSuccess(scheduleArray));
      console.log(scheduleArray);
    } catch (error) {
      dispatch(getSchedulesFailure(String(error)));
    }
};

export default scheduleSlice.reducer;
