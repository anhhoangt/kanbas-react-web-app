import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <div className="w-75 mb-2">
        <input value={assignment?.title} className="form-control mb-2" />

        <textarea
          className="form-control mb-2"
          cols={20}
          rows={5}
          placeholder="Description of the assignment"
        ></textarea>
        <div className="w-75 ml-50">
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Point</label>
            </div>
            <div className="col">
              <input
                className="form-control"
                type="number"
                name="#"
                id="#"
                value="100"
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Assignment Group</label>
            </div>
            <div className="col">
              <select
                name="assign-group"
                id="assign-group"
                className="form-select"
              >
                <option value="g1">Group 1</option>
                <option value="g2">Group 2</option>
                <option value="g3">Group 3</option>
              </select>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Display Grade As</label>
            </div>
            <div className="col">
              <select
                name="grade-display"
                id="grade-display"
                className="form-select"
              >
                <option value="percent">Percentage</option>
                <option value="point">Point</option>
                <option value="letter">Letter</option>
              </select>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Due</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="due-date"
                id="due-date"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Until</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="until-date"
                id="until-date"
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Available From</label>
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                name="available-date"
                id="available-date"
              />
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;
