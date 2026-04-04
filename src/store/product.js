import { create } from "zustand";

export const useProductStore = create((set, get) => ({

    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",

    setCategories: (categories) => set({ categories }),
    setProductList: (productList) => set({ productList }),
    setTotal: (total) => set({ total }),
    setFetchState: (fetchState) => set({ fetchState }),
    setLimit: (limit) => set({ limit }),
    setOffset: (offset) => set({ offset }),
    setFilter: (filter) => set({ filter }),

}));