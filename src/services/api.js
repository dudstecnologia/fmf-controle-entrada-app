import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://172.16.7.121:3000'
});

api.interceptors.request.use(async function (request) {
  if (!['/login', '/users/register'].includes(request.url)) {
    try {
      const token = await AsyncStorage.getItem('token')
      request.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.log('Erro ao ler o token')
      console.log(e)
    }
  }

  return request;
}, function (error) {
  return Promise.reject(error);
});

export default api;
