import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  discussionPage: false,
};

const sidebarSlice = createSlice(initialState, {
  name: "sidebar/category",
  reducers: {},
});
