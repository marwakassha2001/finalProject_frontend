import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5300',
    withCredentials: true
})

export default axiosInstance