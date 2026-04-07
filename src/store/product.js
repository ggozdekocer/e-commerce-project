import { create } from "zustand";
import axiosInstance from "../api/axios";

export const useProductStore = create((set, get) => ({
  categories: [],
  productList: [],
  total: 0,
  fetchState: "NOT_FETCHED",

  fetchCategories: async () => {
    try {
      const response = await axiosInstance.get("/categories");
      set({ categories: response.data });
    } catch (error) {
      console.error("Kategoriler çekilemedi:", error);
    }
  },

  fetchProducts: async (category, filter, sort) => {
    set({ fetchState: "FETCHING" });
    try {
      let url = "/products";
      const params = new URLSearchParams();

      if (category) params.append("category", category);
      if (filter) params.append("filter", filter);
      if (sort) params.append("sort", sort);

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const response = await axiosInstance.get(url);
      set({
        productList: response.data.products,
        total: response.data.total,
        fetchState: "FETCHED"
      });
    } catch (error) {
      set({ fetchState: "FAILED" });
    }
  }
}));