import axios from 'axios';
import { Doctor } from '../models/user';

const baseURL = 'http://localhost:5000/api'; // Thay đổi địa chỉ backend của bạn nếu cần

const agent = axios.create({
  baseURL,
});

export const doctorAPI = {
  getAllDoctors: () => agent.get('/doctor').then(response => response.data),
  getCountDoctor: () => agent.get('/doctor/count').then(response => response.data),
  getDoctor: (id: string) => agent.get(`/doctor/${id}`).then(response => response.data),
  addDoctor: (doctorData: Doctor) => agent.post('/doctor', doctorData).then(response => response.data),
  updateDoctor: (id: string, doctorData: Doctor) => agent.put(`/doctor/${id}`, doctorData).then(response => response.data),
  deleteDoctor: (id: string) => agent.delete(`/doctor/${id}`).then(response => response.data),
};

export const userAPI = {
  login: (email: string, password: string) => agent.post('/user/login', { email, password }).then(response => response.data),
  //register: (userData) => agent.post('/user/register', userData).then(response => response.data),
  logout: () => agent.post('/user/logout').then(response => response.data),
  getCurrentUser: () => agent.get('/user/current').then(response => response.data),
  //updateUser: (userData) => agent.put('/user/current', userData).then(response => response.data),
  refreshAccessToken: () => agent.post('/user/refreshtoken').then(response => response.data),
  getCountPatient: () => agent.get('/user/count-patient').then(response => response.data),
  getAllUsers: () => agent.get('/user').then(response => response.data),
  //addUserByAdmin: (userData) => agent.post('/user', userData).then(response => response.data),
  getUser: (id: string) => agent.get(`/user/${id}`).then(response => response.data),
  //updateUserByAdmin: (id, userData) => agent.put(`/user/${id}`, userData).then(response => response.data),
  //deleteUser: (id) => agent.delete(`/user/${id}`).then(response => response.data),
}

export const clinicAPI = {
  getAllClinics: () => agent.get('/clinic').then(response => response.data),
  getClinic: (id: string) => agent.get(`/clinic/${id}`).then(response => response.data),
}

export const scheduleAPI = {
  getSchedules: () => agent.get('/schedule').then(response => response.data),
}
export default agent;
