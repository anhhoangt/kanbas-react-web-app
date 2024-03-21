import { createSlice } from "@reduxjs/toolkit";
import { db } from "../Database";

const initialState = {
  quizzes: db.quizzes,
  quiz: {
    _id: "0",
    title: "New Quiz",
    isPublished: false,
    availableDate: "2023-01-15",
    availableUntilDate: "2024-02-15",
    dueDate: "2023-02-10",
    points: 100,
    numberOfQuestions: 10,
    course: "0",
  },
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quizzes = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.quizzes,
      ];
    },
    deleteQuiz(state, action) {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },

    updateQuiz(state, action) {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },
    setQuiz(state, action) {
      state.quizzes = action.payload;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, setQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;
