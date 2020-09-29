import axiosMiddleware from 'redux-axios-middleware';
import { appClient } from './http';

export default axiosMiddleware(appClient);
