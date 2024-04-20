import { createSlice } from "@reduxjs/toolkit";

import React from "react";

const initialState = {
    answers: [] as any[],
    answer: {
        text: "",
        isCorrect: false,
    },
};

const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        setAnswers(state, action) {
            state.answers = action.payload;
        } ,
        addAnswer(state, action) {
            state.answers = [action.payload, ...state.answers];
        } ,
        updateAnswer(state, action) {
            state.answers = state.answers.map((answer: any) => {
                if (answer._id === action.payload._id) {
                    return action.payload;
                } else {
                    return answer;
                }
            });
        } ,
        deleteAnswer(state, action) {
            state.answers = state.answers.filter(
                (answer) => answer._id !== action.payload
            );
        } ,
        setAnswer(state, action) {
            state.answer = action.payload;
        } ,
    },
});
export const {setAnswers, addAnswer, updateAnswer, deleteAnswer, setAnswer} = answersSlice.actions;

export default answersSlice.reducer;