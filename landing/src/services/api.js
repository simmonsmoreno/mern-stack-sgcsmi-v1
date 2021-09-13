import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:3333/sgcsmi/api"
});

api.interceptors.request.use(async config => {

    const token = localStorage.getItem("jwtToken")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;