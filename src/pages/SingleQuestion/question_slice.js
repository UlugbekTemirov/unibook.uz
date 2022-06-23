import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  question: {},
  questionLoadingStatus: "stable",
};

export const addCommentToBase = createAsyncThunk(
  "comment/add",
  async ({ ...args }) => {
    const { request } = useHttp();
    request(
      `http://localhost:3001/questions/${args.id}`,
      "PUT",
      JSON.stringify(args.newQuestion)
    );
  }
);

export const setQuestion = createAsyncThunk(
  "comment/setQuestion",
  async (id) => {
    const { request } = useHttp();
    return await request(`http://localhost:3001/questions/${id}`);
  }
);

const questionSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: ({ question }, { payload }) => {
      question.comments = [payload, ...question.comments];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setQuestion.pending, ({ questionLoadingStatus }) => {
        questionLoadingStatus = "loading";
      })
      .addCase(setQuestion.fulfilled, (state, { payload }) => {
        state.question = payload;
        state.questionLoadingStatus = "stable";
      })
      .addCase(setQuestion.rejected, ({ questionLoadingStatus }) => {
        questionLoadingStatus = "error";
      });
  },
});

const { actions, reducer } = questionSlice;
export default reducer;
export const { addComment } = actions;
