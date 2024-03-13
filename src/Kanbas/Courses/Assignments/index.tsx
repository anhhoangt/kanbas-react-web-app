import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState, assignmentType } from "../../store/store";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../../store/assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );

  const dispatch = useDispatch();
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <div>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <input
                className="form-control"
                id="assignment-search"
                placeholder="Search for Assignments"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className="wd-assignments-button ">
                <HiPlus /> Group
              </button>
              <button className="wd-assignments-button-alert ">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
                  <HiPlus /> Assignment
                </Link>
                {/* <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <HiPlus /> Assignment
                </Link> */}
                {/* <HiPlus /> Assignment */}
              </button>
              <button className="wd-assignments-button ">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="list-group wd-modules">
          <div
            className="m-2 border"
            style={{ borderLeft: "none", backgroundColor: "lightgray" }}
          >
            <span className="text-center">
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
            </span>
            <span className="float-end">
              <span className="grade-portion">40% of Total</span>
              <button className="ms-2">
                <FaPlusCircle />
              </button>
              <button className="ms-2">
                <FaEllipsisV />
              </button>
            </span>
          </div>
          <li className="list-group-item">
            <ul className="list-group">
              {assignmentList
                .filter((assignment) => assignment.course === courseId)
                .map((assignment) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <span className="float-end">
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to remove this assignment?"
                            )
                          ) {
                            dispatch(deleteAssignment(assignment._id));
                          }
                        }}
                      >
                        Delete
                      </button>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
