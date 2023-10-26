import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.0.145:3000'
});

export default api;
