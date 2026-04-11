import { create } from "zustand";
import axiosInstance from "../api/axios";

export const useCartStore = create((set, get) => ({
    cart: [],
    payment: {},
    address: {},
    addressList: [],
    cardList: [],
    orders: [], // Yeni eklenen state

    setCart: (cart) => set({ cart }),
    clearCart: () => set({ cart: [] }),
    setPayment: (payment) => set({ payment }),
    setAddress: (address) => set({ address }),
    setCardList: (cardList) => set({ cardList }),

    fetchAddresses: async () => {
        try {
            const response = await axiosInstance.get('/user/address');
            set({ addressList: response.data });
        } catch (error) {
            console.error(error);
        }
    },

    addAddress: async (addressData) => {
        try {
            await axiosInstance.post('/user/address', addressData);
            get().fetchAddresses();
        } catch (error) {
            console.error(error);
        }
    },

    deleteAddress: async (addressId) => {
        try {
            await axiosInstance.delete(`/user/address/${addressId}`);
            get().fetchAddresses();
        } catch (error) {
            console.error(error);
        }
    },

    fetchCards: async () => {
        try {
            const response = await axiosInstance.get('/user/card');
            set({ cardList: response.data });
        } catch (error) {
            console.error(error);
        }
    },

    addCard: async (cardData) => {
        try {
            await axiosInstance.post('/user/card', cardData);
            get().fetchCards();
        } catch (error) {
            console.error(error);
        }
    },

    deleteCard: async (cardId) => {
        try {
            await axiosInstance.delete(`/user/card/${cardId}`);
            get().fetchCards();
        } catch (error) {
            console.error(error);
        }
    },

    createOrder: async (orderData) => {
        try {
            const response = await axiosInstance.post('/order', orderData);
            get().clearCart();
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    fetchOrders: async () => {
        try {
            const response = await axiosInstance.get('/order');
            set({ orders: response.data });
        } catch (error) {
            console.error("Orders fetch error:", error);
        }
    },

    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find(item => item.product.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map(item =>
                        item.product.id === product.id ? { ...item, count: item.count + 1 } : item
                    )
                };
            }
            return {
                cart: [...state.cart, { count: 1, checked: true, product: product }]
            };
        })
}));