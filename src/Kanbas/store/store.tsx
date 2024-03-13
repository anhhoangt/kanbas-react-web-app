import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./modulesReducer";
import coursesReducer from "./coursesReducer";
import assignmentsReducer from "./assignmentsReducer";

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
}
const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
    assignmentsReducer,
  },
});

export default store;
