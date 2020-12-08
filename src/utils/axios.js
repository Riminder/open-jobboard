import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.rimstaging.net/v1',
    headers: { 
        'X-API-KEY': 'ask_0dec90609f2ksk45454sd44545dd4'
    }
});

export default instance;