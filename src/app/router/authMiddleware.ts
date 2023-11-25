// authMiddleware.ts
import { Middleware } from 'redux';
import { RootState } from '../store/store';
import { loginSuccess } from '../slice/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const authMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  console.log('Middleware is called!');
  if (action.type === loginSuccess.type) {
    const { user } = store.getState().auth;
    
    if (user) {
      toast.success(`Hello, ${user.fullName}! Login successful.`);
    }
  }

  return next(action);
};

export default authMiddleware;
