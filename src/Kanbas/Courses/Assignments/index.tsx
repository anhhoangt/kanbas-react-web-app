import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
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
                <HiPlus /> Assignment
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
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <span className="grade-portion">40% of Total</span>
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
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
