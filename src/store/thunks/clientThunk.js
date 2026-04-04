import axiosInstance from "../../api/axios";
import { useClientStore } from "../client";

export const loginThunk = async (data) => {
  try {
    const res = await axiosInstance.post("/login", data);

    const { user, token } = res.data;

    useClientStore.getState().setUser(user);

    if (data.remember) {
      localStorage.setItem("token", token);
    }

    return { success: true };

  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Login failed",
    };
  }
};