import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://e-commerce-backend-zsxv.onrender.com",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;