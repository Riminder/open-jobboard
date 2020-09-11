import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rimstaging.net/v1',
    headers: { 
        'X-API-KEY': 'ask_0dec90609f229d31d0bdd6a03da4f588'
    }
});

export default instance;