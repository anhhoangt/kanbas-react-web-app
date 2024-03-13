import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../Database";
import { KanbasState } from "./store";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "0",
    title: "New Assignment",
    description: "New Description",
    point: 100,
    dueDate: "2023-09-10",
    availableFromDate: "2023-12-15",
    availableUntilDate: "2024-02-15",
    course: "0",
  },
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment(state, action) {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment(state, action) {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment(state, action) {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment(state, action) {
      state.assignment = action.payload;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
