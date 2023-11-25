// clinicSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/store';
import { Clinic } from '../models/clinic';
import { clinicAPI } from '../api/agent';

interface ClinicState {
    clinics: Clinic[];
    selectedClinic: Clinic | null
    loading: boolean;
    error: string | null;
}
  
const initialState: ClinicState = {
    clinics: [],
    selectedClinic: null,
    loading: false,
    error: null,
};

const clinicSlice = createSlice({
    name: 'clinic',
    initialState,
    reducers: {
      //get all clinic
      getClinicsStart(state) {
        state.loading = true;
        state.error = null;
      },
      getClinicsSuccess(state, action: PayloadAction<Clinic[]>) {
        state.loading = false;
        state.clinics = action.payload;
        },
      getClinicsFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },
      // get clinic buy id
      getClinicStart(state) {
        state.loading = true;
        state.error = null;
      },
      getClinicSuccess(state, action: PayloadAction<Clinic>) {
        state.loading = false;
        state.selectedClinic = action.payload;
      },
      getClinicFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },

    },
});

export const {
  //get all clinic
  getClinicsStart, 
  getClinicsSuccess, 
  getClinicsFailure,
  // get clinic buy id
  getClinicStart,
  getClinicSuccess,
  getClinicFailure,
} = clinicSlice.actions

export const fetchClinics = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getClinicsStart());
      const response = await clinicAPI.getAllClinics();
      
      // Kiểm tra xem response có thuộc tính "data" không và có phải là một mảng không
      const clinicsArray = Array.isArray(response.data) ? response.data : [];
  
      dispatch(getClinicsSuccess(clinicsArray));
      console.log(clinicsArray);
    } catch (error) {
      dispatch(getClinicsFailure(String(error)));
    }
};

export const fetchClinic = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getClinicStart());
    const response = await clinicAPI.getClinic(id);
    dispatch(getClinicSuccess(response.data));
    console.log(response.data)
  } catch (error) {
    dispatch(getClinicFailure(String(error)));
  }
};
export default clinicSlice.reducer;

