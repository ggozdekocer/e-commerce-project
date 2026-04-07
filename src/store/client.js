import { create } from "zustand";
import axios from "axios";

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

    fetchRoles: async() => {
        const roles = get().roles;

        if (roles.length > 0) return;

        try {
            const response = await axios.get(
                "https://workintech-fe-ecommerce.onrender.com/roles"
            );

            set({ roles: response.data });
        } catch (error) {
            console.log(error);
        }
    },
}));