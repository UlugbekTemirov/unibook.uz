import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  categories: [],
  categoriesLoadingStatus: "stable",
  activeCategory: "All",
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const { request } = useHttp();
    return await request("http://localhost:3001/categories");
  }
);

const sidebarSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    activeCategoryChanged: (state, { payload }) => {
      state.activeCategory = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoadingStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.categoriesLoadingStatus = "stable";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoriesLoadingStatus = "error";
      });
  },
});

const { reducer, actions } = sidebarSlice;

export default reducer;
export const { activeCategoryChanged } = actions;
