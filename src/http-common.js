import axios from 'axios/index'
/* eslint-disable */
export const API_BASE = encodeURI(axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}));

