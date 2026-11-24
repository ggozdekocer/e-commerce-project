import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://e-commerce-backend-zsxv.onrender.com",
});

/** Reads the saved token from localStorage ("remember me") or from sessionStorage. */
const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/** Returns the error_message sent by the backend, or the given fallback text. */
export const getErrorMessage = (error, fallback) =>
  error.response?.data?.error_message || fallback;

export default axiosInstance;