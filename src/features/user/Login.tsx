// LoginComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../app/slice/authSlice'; 
import { RootState } from '../../app/store/store'; 
import { AppDispatch } from '../../app/store/store';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

const LoginComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await dispatch(login(email, password));
  };

  if (isLoggedIn) {
    // Chuyển hướng đến DoctorList.tsx sau khi đăng nhập thành công
    navigate('/home');
  }
  return (
    <Box
      component="form"
      sx={{
        display: 'inline-block', // Sử dụng display: inline-block để co giãn theo nội dung con
        alignItems: 'center',
        justifyContent: 'center',
        height: 'fit-content', // Tự co giãn theo chiều cao của nội dung bên trong
        padding: '20px', // Thêm padding cho box
        border: '1px solid #ccc', // Thêm khung xung quanh box
        borderRadius: '5px', // Bo tròn góc của khung
        
        '& .MuiTextField-root': {
          margin: '10px', // Thêm margin 10px cho TextField
          width: '100%', // Chiều rộng 100%
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="@gmail.com"
          multiline
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Password"
          multiline
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} disabled={loading}>Login</Button>
    </Box>
  );
};

export default LoginComponent;
