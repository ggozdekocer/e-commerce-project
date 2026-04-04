import { create } from "zustand";

export const useCartStore = create((set, get) => ({

    cart: [],
    payment: {},
    address: {},

    setCart: (cart) => set({ cart }),
    setPayment: (payment) => set({ payment }),
    setAddress: (address) => set({ address }),

}));