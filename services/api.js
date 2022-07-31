import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true
})

api.interceptors.response.use( (res) => {
    return res
}, (error) => {
    if(error.response.status === 401){

    }
    return Promise.error(error);
})

export default api;
