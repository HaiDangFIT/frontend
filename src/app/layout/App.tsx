import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import DoctorList from '../../features/doctor/DoctorList';
import Login from '../../features/user/Login';
import HomePage from '../../features/home/HomePage';
import ClinicList from '../../features/clinic/ClinicList';
import ScheduleList from '../../features/schedule/ScheduleList';
import DoctorDetail from '../../features/doctor/DoctorDetail';

export default function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: 'light'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Routes>
        <Route path='/doctor' Component={DoctorList}/>
        <Route path='/login' Component={Login}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/clinic' Component={ClinicList}/>
        <Route path='/schedule' Component={ScheduleList}/>
        <Route path="/doctor-detail/:id" Component={DoctorDetail} />
      </Routes>
    </ThemeProvider>
  );
}
