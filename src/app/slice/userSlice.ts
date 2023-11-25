// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/store';
import { userAPI } from '../api/agent';
import { User } from '../models/user';

interface UserState {
  userInfo: User | null; // Thay bằng định dạng phù hợp cho thông tin người dùng
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    getUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFailure } = userSlice.actions;

export const fetchUser = (userId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const response = await userAPI.getUser(userId);
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure(String(error)));
  }
};

export default userSlice.reducer;
