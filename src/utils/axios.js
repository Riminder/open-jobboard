import axios from 'axios';
import { API_KEY } from './config'

const instance = axios.create({
    baseURL: 'https://api.rimstaging.net/v1',
    headers: { 
        'X-API-KEY': API_KEY,
    }
});

export default instance;