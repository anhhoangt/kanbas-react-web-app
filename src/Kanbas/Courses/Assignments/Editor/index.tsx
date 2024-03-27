import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store/store";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../../../store/assignmentsReducer";
import * as client from "../client";
function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  return (
    <div>
      <h2>Assignment Name</h2>
      <div className="w-75 mb-2">
        <input
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }
          value={assignment?.title}
          className="form-control mb-2"
        />

        <textarea
          className="form-control mb-2"
          cols={20}
          rows={5}
          placeholder="Description of the assignment"
          value={assignment?.description}
          onChange={(e) =>
            dispatch(
              selectAssignment({ ...assignment, description: e.target.value })
            )
          }
        ></textarea>
        <div className="w-75 ml-50">
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Point</label>
            </div>
            <div className="col">
              <input
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, point: e.target.value })
                  )
                }
                className="form-control"
                type="number"
                name="#"
                id="#"
                value={assignment?.point}
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
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, dueDate: e.target.value })
                  )
                }
                value={assignment?.dueDate}
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
                onChange={(e) =>
                  dispatch(
                    selectAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  )
                }
                value={assignment?.availableUntilDate}
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
                onChange={(e) =>
                  dispatch(
                    selectAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  )
                }
                value={assignment?.availableFromDate}
                type="date"
                className="form-control"
                name="available-date"
                id="available-date"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          if (!assignmentId) {
            // dispatch(addAssignment({ ...assignment, course: courseId }));
            handleAddAssignment();
          } else {
            // dispatch(updateAssignment(assignment));
            handleUpdateAssignment();
          }
          navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }}
        className="btn btn-success ms-2 float-end"
      >
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
