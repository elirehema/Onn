import '../../node_modules/nprogress/nprogress.css'
import NProgress from 'nprogress';
import axios from 'axios';
import API_BASE from './http-config'
import REMOTE_API_BASE from './http-config'

const instance = axios.create({
    baseURL: REMOTE_API_BASE,
    timeout: 10000,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('qAccessToken')
    }
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
    NProgress.start();
    return config
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
    NProgress.done();
    return response
});

export default instance