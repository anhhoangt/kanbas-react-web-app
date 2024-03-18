import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useSelector } from "react-redux";
import { KanbasState } from "../store/store";

function Courses() {
  const { courseId } = useParams();
  const courses = useSelector(
    (state: KanbasState) => state.coursesReducer.courses
  );
  const course = courses.find((course) => course._id === courseId);

  // get the current tab of course ("Home", "Modules", "Piazza", "Grades", "Assignments")
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const lastPath = location.pathname.split("/").pop();

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginRight: "3px" }}
      >
        <h3>
          <HiMiniBars3 /> {course?.name} - {lastPath}
        </h3>
        <button type="button" className="btn" style={{ border: "1px solid" }}>
          <FaGlasses /> Student View
        </button>
      </div>
      <hr />
      <CourseNavigation />
      <div className="d-none d-md-block">
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "75px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />

            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/new" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
