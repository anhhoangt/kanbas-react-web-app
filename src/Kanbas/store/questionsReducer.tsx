import { createSlice } from "@reduxjs/toolkit";

import React from "react";

const initialState = {
  questions: [] as any[],
  question: {
    title: "Question",
    points: 1,
    // questionType: "Multiple Choice",
    questionText: "",
    // choices: [{ text: "", isCorrect: false }],
    // correctAnswer: "",
  },
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    addQuestion(state, action) {
      state.questions = [action.payload, ...state.questions];
    },
    updateQuestion(state, action) {
      state.questions = state.questions.map((question: any) => {
        if (question._id === action.payload._id) {
          return action.payload;
        } else {
          return question;
        }
      });
    },
    setQuestion(state, action) {
      state.question = action.payload;
    },
    deleteQuestion(state, action) {
      state.questions = state.questions.filter(
        (question) => question._id !== action.payload
      );
    },
  },
});

export const {
  setQuestions,
  addQuestion,
  updateQuestion,
  setQuestion,
  deleteQuestion,
} = questionsSlice.actions;
export default questionsSlice.reducer;
