import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  questions: [],
  questionsLoadingStatus: "stable",
};

export const fetchQuestions = createAsyncThunk("questions/fetch", async () => {
  const { request } = useHttp();
  return await request("http://localhost:3001/questions");
});

export const addQuestion = createAsyncThunk(
  "questions/addNews",
  async (data) => {
    const { request } = useHttp();
    return await request(
      "http://localhost:3001/questions",
      "POST",
      JSON.stringify(data)
    );
  }
);

const forumSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    removeQuestion: ({ questions }, { payload }) => {
      questions = questions.filter((question) => question.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.questionsLoadingStatus = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, { payload }) => {
        state.questions = payload;
        state.questionsLoadingStatus = "stable";
      })
      .addCase(fetchQuestions.rejected, (state) => {
        state.questionsLoadingStatus = "error";
      })
      .addCase(addQuestion.fulfilled, (state, { paylod, meta }) => {
        state.questions = [...state.questions, meta.arg];
      });
  },
});

const { actions, reducer } = forumSlice;
export default reducer;
export const { removeQuestion } = actions;
