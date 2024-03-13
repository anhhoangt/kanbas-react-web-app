import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourse,
} from "../store/coursesReducer";
import { KanbasState } from "../store/store";

function Dashboard() {
  const courses = useSelector(
    (state: KanbasState) => state.coursesReducer.courses
  );
  const course = useSelector(
    (state: KanbasState) => state.coursesReducer.course
  );
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <div>
        <div className="d-flex">
          <input
            value={course.name}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            onChange={(e) =>
              dispatch(setCourse({ ...course, name: e.target.value }))
            }
          />
          <input
            value={course.number}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            onChange={(e) =>
              dispatch(setCourse({ ...course, number: e.target.value }))
            }
          />
          <input
            value={course.startDate}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            type="date"
            onChange={(e) =>
              dispatch(setCourse({ ...course, startDate: e.target.value }))
            }
          />
          <input
            value={course.endDate}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            type="date"
            onChange={(e) =>
              dispatch(setCourse({ ...course, endDate: e.target.value }))
            }
          />
        </div>
        <button
          onClick={() => dispatch(addNewCourse({ ...course }))}
          className="btn btn-success m-1"
        >
          Add
        </button>
        <button
          onClick={() => dispatch(updateCourse(course))}
          className="btn btn-info m-1"
        >
          Update
        </button>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  alt="..."
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}{" "}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(setCourse(course));
                      }}
                      className="btn btn-primary m-1"
                    >
                      Edit
                    </button>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
