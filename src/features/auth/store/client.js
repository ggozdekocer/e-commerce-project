import { create } from "zustand";
import axiosInstance from "../../../api/axios";

export const useClientStore = create((set, get) => ({
    user: null,
    isAuthChecked: false,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "tr",

    setUser: (user) => set({ user }),
    setAuthChecked: (value) => set({ isAuthChecked: value }),

    setRoles: (roles) => set({ roles }),
    setTheme: (theme) => set({ theme }),
    setLanguage: (language) => set({ language }),

    fetchRoles: async () => {
        if (get().roles.length > 0) return;

        try {
            const response = await axiosInstance.get("/roles");
            set({ roles: response.data.data });
        } catch (error) {
            console.error(error);
        }
    },
}));