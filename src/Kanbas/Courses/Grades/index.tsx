import { db } from "../../Database";
import { useParams } from "react-router-dom";
import { RiSettings4Fill } from "react-icons/ri";
import { LiaFileImportSolid } from "react-icons/lia";
import { PiExportBold } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const as = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const es = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <div className="row">
        <div className="col mb-3 ">
          <select className="form-select wd-grade-dropdown">
            <option selected>Gradebook</option>
            <option value="1">Gradebook 1</option>
            <option value="2">Gradebook 2</option>
            <option value="3">Gradebook 3</option>
          </select>
        </div>
        <div className="col d-flex justify-content-end mx-2">
          <button className="wd-grade-button">
            {" "}
            <LiaFileImportSolid /> Import
          </button>
          <button className="wd-grade-button">
            <PiExportBold /> Export
          </button>
          <button className="wd-grade-button">
            <RiSettings4Fill />
          </button>
        </div>
      </div>
      <div className="row">
        {/* <!-- create a form with 2 labels Student Name and Assignment Name, 1 button called Apply Filters --> */}
        <div className="col mb-3 w-45">
          <label className="form-label">Student Names</label>
          <div className="d-flex align-items-center">
            <div className="">
              <SlMagnifier />
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Search students"
            />
          </div>
        </div>

        <div className="col mb-3 w-45">
          <label className="form-label">Assignment Names</label>
          <div className="d-flex align-items-center">
            <div className="">
              <SlMagnifier />
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Search assignments"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-light border">
          <FaFilter /> Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {db.assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
