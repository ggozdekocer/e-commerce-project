import { create } from "zustand";
import axiosInstance from "../api/axios";

export const useProductStore = create((set) => ({
  categories: [],
  productList: [],
  currentProduct: null,
  total: 0,
  fetchState: "NOT_FETCHED",

  fetchCategories: async () => {
    try {
      const response = await axiosInstance.get("/categories");
      set({ categories: response.data.data });
    } catch (error) {
      console.error(error);
    }
  },

  fetchProducts: async (category, filter, sort, page = 1, limit = 25) => {
    set({ fetchState: "FETCHING" });

    try {
      const params = new URLSearchParams();

      if (category) params.append("category", category);
      if (filter) params.append("filter", filter);
      if (sort) params.append("sort", sort);

      const offset = (page - 1) * limit;
      params.append("offset", offset);
      params.append("limit", limit);

      const response = await axiosInstance.get(`/products?${params.toString()}`);

      set({
        productList: response.data.data.products,
        total: response.data.data.total,
        fetchState: "FETCHED"
      });
    } catch (error) {
      console.error(error);
      set({ fetchState: "FAILED" });
    }
  },

  fetchProductDetail: async (productId) => {
    set({ fetchState: "FETCHING" });

    try {
      const response = await axiosInstance.get(`/products/${productId}`);

      set({
        currentProduct: response.data.data,
        fetchState: "FETCHED"
      });
    } catch (error) {
      console.error(error);
      set({ fetchState: "FAILED" });
    }
  }
}));