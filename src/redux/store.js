import { configureStore } from "@reduxjs/toolkit";
import question from "../components/Forumbar/forum_slice";
import comment from "../pages/SingleQuestion/question_slice";
import category from "../components/Sidebar/sidebar_slice";
import stringMiddleWare from "../middleware/stringMiddleWare";

const actionSanitizer = (action) =>
  action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
    ? { ...action, data: "<<LONG_BLOB>>" }
    : action;

export const store = configureStore({
  reducer: { question, comment, category },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleWare),
  devTools: process.env.NODE_ENV !== "production",
  actionSanitizer,
  stateSanitizer: (state) =>
    state.data ? { ...state, data: "<<LONG_BLOB>>" } : state,
});
