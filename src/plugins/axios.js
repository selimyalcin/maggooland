import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.maggoo.io',
    timeout: 1000,
    withCredentials: false,
  //  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance