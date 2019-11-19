import axios from 'axios';
import { MY_IP } from 'react-native-dotenv';

const api = axios.create({
  baseURL: `http://${MY_IP}:3333`
})

export default api;
