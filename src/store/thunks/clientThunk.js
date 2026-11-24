import axiosInstance, { getErrorMessage } from "../../api/axios";
import { useClientStore } from "../client";

export const loginThunk = async (data) => {
  try {
    const res = await axiosInstance.post("/login", {
      email: data.email,
      password: data.password
    });

    const user = res.data.data;
    const token = user.token;

    const store = useClientStore.getState();
    store.setUser(user);
    store.setAuthChecked(true);

    // keep the token in one place only, so an old token is never read by mistake
    if (data.remember) {
      sessionStorage.removeItem("token");
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
      sessionStorage.setItem("token", token);
    }

    return { success: true };

  } catch (error) {
    console.error("Login Hatası:", error.response?.data);
    return {
      success: false,
      message: getErrorMessage(error, "Giriş başarısız. Bilgilerinizi kontrol edin."),
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
    const res = await axiosInstance.get("/verify");
    const user = res.data.data;

    store.setUser(user);

    // save the renewed token in the same place the old one was
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", user.token);
    } else {
      sessionStorage.setItem("token", user.token);
    }
  } catch (error) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    store.setUser(null);
  } finally {
    store.setAuthChecked(true);
  }
};