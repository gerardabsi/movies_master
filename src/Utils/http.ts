import axios from 'axios';
import constants from './constants';

export const appClient = axios.create({
  baseURL: constants.apiUrl,
});
