import axiosInstance from "../../api/axios";
import { useClientStore } from "../client";

export const loginThunk = async (data) => {
  try {
    const loginData = {
      email: data.email,
      password: data.password
    };

    const res = await axiosInstance.post("/login", loginData);

    const user = res.data; 
    const token = res.data.token;

    
    const store = useClientStore.getState();
    store.setUser(user);
    store.setAuthChecked(true);

    axiosInstance.defaults.headers.common["Authorization"] = token;

    if (data.remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    return { success: true };

  } catch (error) {
    console.error("Login Hatası:", error.response?.data);
    return {
      success: false,
      message: error.response?.data?.message || "Giriş başarısız. Bilgilerinizi kontrol edin.",
    };
  }
};


export const verifyTokenThunk = async () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const store = useClientStore.getState();

  if (!token) {
    store.setAuthChecked(true); 
    return;
  }

  try {
    axiosInstance.defaults.headers.common["Authorization"] = token;
    const res = await axiosInstance.get("/verify");

    store.setUser(res.data);
    
    const newToken = res.data.token;
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", newToken);
    } else {
      sessionStorage.setItem("token", newToken);
    }
    axiosInstance.defaults.headers.common["Authorization"] = newToken;
  } catch (error) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    store.setUser(null);
  } finally {
    store.setAuthChecked(true);
  }
};