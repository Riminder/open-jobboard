import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-workflows.hrflow.ai/teams/da0139c7b8786bed10596da80725c9cab7cbc981/hrflow/python3.6/37b714c4ed47f98b2099623943f001480c20b1e0',
});

export default instance;