import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const appClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default axiosMiddleware(appClient);
