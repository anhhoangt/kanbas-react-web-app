import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./modulesReducer";
import coursesReducer from "./coursesReducer";
import assignmentsReducer from "./assignmentsReducer";
import quizzesReducer from "./quizzesReducer";

export type QuizzType = {
  _id: string;
  title: string;
  isPublished: boolean;
  availableDate: string;
  availableUntilDate: string;
  dueDate: string;
  points: number;
  numberOfQuestions: number;
  course: string;
};

export type CourseType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

export type assignmentType = {
  _id?: string;
  title: string;
  description: string;
  point: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course: string;
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
    assignments: assignmentType[];
    assignment: assignmentType | null;
  };
  quizzesReducer: {
    quizzes: QuizzType[];
    quiz: QuizzType;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
    assignmentsReducer,
    quizzesReducer,
  },
});

export default store;
