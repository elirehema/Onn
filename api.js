import axios from 'axios'
/* eslint-disable */ 
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8080/api',
        timeout: 10000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
