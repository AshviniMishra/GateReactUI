import axios from 'axios';
const URL = 'http://localhost:8080/gate2021'; //Local API URL
const apiUrl = axios.create({
    baseUrl: URL,
    withCredentials: true,
});
export default apiUrl;