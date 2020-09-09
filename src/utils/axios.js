import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rimstaging.net/v1'
});

export default instance;