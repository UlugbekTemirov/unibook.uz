import { configureStore } from "@reduxjs/toolkit";
import question from "../components/Forumbar/forum_slice";
import stringMiddleWare from "../middleware/stringMiddleWare";

export const store = configureStore({
  reducer: { question },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleWare),
  devTools: process.env.NODE_ENV !== "production",
});
