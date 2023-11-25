import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/store';
import { Doctor } from '../models/user';
import { doctorAPI } from '../api/agent';

interface DoctorState {
  doctors: Doctor[];
  doctorCount: number;
  selectedDoctor: Doctor | null;
  loading: boolean;
  error: string | null;
}

const initialState: DoctorState = {
  doctors: [],
  doctorCount: 0,
  selectedDoctor: null,
  loading: false,
  error: null,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    //getAllDoctors
    getDoctorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getDoctorsSuccess(state, action: PayloadAction<Doctor[]>) {
      state.loading = false;
      state.doctors = action.payload;
    },
    getDoctorsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    //getCountDoctor
    getDoctorCountStart(state) {
        state.loading = true;
        state.error = null;
    },
    getDoctorCountSuccess(state, action: PayloadAction<{ success: boolean; data: number }>) {
        state.loading = false;
        state.doctorCount = action.payload.data;
    },
    getDoctorCountFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    },
    //getDoctor by id
    getDoctorStart(state) {
      state.loading = true;
      state.error = null;
    },
    getDoctorSuccess(state, action: PayloadAction<Doctor>) {
      state.loading = false;
      state.selectedDoctor = action.payload;
    },
    getDoctorFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
    //getAllDoctors
    getDoctorsStart, 
    getDoctorsSuccess, 
    getDoctorsFailure, 
    //getCountDoctor
    getDoctorCountStart, 
    getDoctorCountSuccess, 
    getDoctorCountFailure,
    //getDoctor by id
    getDoctorStart,
    getDoctorSuccess,
    getDoctorFailure, 
} = doctorSlice.actions;

//getAllDoctors
export const fetchDoctors = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getDoctorsStart());
    const response = await doctorAPI.getAllDoctors();
    
    // Kiểm tra xem response có thuộc tính "data" không và có phải là một mảng không
    const doctorsArray = Array.isArray(response.data) ? response.data : [];

    dispatch(getDoctorsSuccess(doctorsArray));
    console.log(doctorsArray);
  } catch (error) {
    dispatch(getDoctorsFailure(String(error)));
  }
};

//getCountDoctor
export const fetchDoctorCount = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getDoctorCountStart());
      const response = await doctorAPI.getCountDoctor();
      dispatch(getDoctorCountSuccess(response));
    } catch (error) {
      dispatch(getDoctorCountFailure(String(error)));
    }
};

//getDoctor by id
export const fetchDoctor = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getDoctorStart());
    const response = await doctorAPI.getDoctor(id);
    dispatch(getDoctorSuccess(response.data));
    console.log(response.data)
  } catch (error) {
    dispatch(getDoctorFailure(String(error)));
  }
};

export default doctorSlice.reducer;