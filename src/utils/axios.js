import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: { 
        'X-API-KEY': process.env.API_KEY,
    }
});

export default instance;