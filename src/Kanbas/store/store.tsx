import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./modulesReducer";
import coursesReducer from "./coursesReducer";
import assignmentsReducer from "./assignmentsReducer";
import quizzesReducer from "./quizzesReducer";
import questionsReducer from "./questionsReducer";
import answersReducer from "./answersReducer";

export type CourseType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  coursesReducer: {
    courses: CourseType[];
    course: CourseType;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any | null;
  };
  quizzesReducer: {
    quizzes: any[];
    quiz: any | null;
  };
  questionsReducer: {
    questions: any[];
    question: any | null;
  };
  answersReducer: {
    answers: any[];
    answer: any | null;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
    assignmentsReducer,
    quizzesReducer,
    questionsReducer,
    answersReducer,
  },
});

export default store;
