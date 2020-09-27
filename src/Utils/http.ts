import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import constants from './constants';

const appClient = axios.create({
  baseURL: constants.apiUrl,
});

export default axiosMiddleware(appClient);
