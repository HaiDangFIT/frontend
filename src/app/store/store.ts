// store.ts
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import doctorReducer from '../slice/doctorSlice';
import authReducer from '../slice/authSlice';
import clinicReducer from '../slice/clinicSlice'
import authMiddleware from '../router/authMiddleware';
import scheduleReducer from '../slice/scheduleSlice'

const preloadedState = {};

const rootReducer = combineReducers({
  doctor: doctorReducer,
  auth: authReducer,
  clinic: clinicReducer,
  schedule: scheduleReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export { store };
