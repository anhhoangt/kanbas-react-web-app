import ModuleList from "../Modules/List";
import "./index.css";
import { FiUpload } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { CgArrowBottomLeftO } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineNoPhotography } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoNotificationsOffSharp } from "react-icons/io5";
import { GrScheduleNew } from "react-icons/gr";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <ModuleList />
      </div>
      <div
        className="flex-grow-0 me-2 d-none d-lg-block"
        style={{ width: "250px" }}
      >
        <h3>Course Status</h3>

        <div>
          <button className="wd-home-button">Unpublish</button>
          <button className="wd-home-button">Published</button>

          <ul className="list-group">
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <FiUpload /> Import Existing Content
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <AiOutlineEye /> Import From Commons
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <CgArrowBottomLeftO /> Choose Home Page
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <SiGoogleanalytics /> View Course Stream
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <MdOutlineNoPhotography /> View Course Statistics
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <VscGraph /> New Analytics
              </a>
            </li>
            <li>
              <a
                className="btn button-sidebar-wide"
                href="https://www.google.com/"
              >
                <IoNotificationsOffSharp /> View Course Notification
              </a>
            </li>
          </ul>
        </div>

        <h2>To Do</h2>
        <hr />
        <div>
          <a href="#">View Calendar</a>

          <div className="ml-2">
            <ul className="list-group">
              <li>
                <GrScheduleNew /> {"  "}
                <a href="https://www.google.com/">Lecture 1</a>
              </li>
              <li>
                <GrScheduleNew /> {"  "}
                <a href="https://www.google.com/">Assignment 1</a>
              </li>
              <li>
                <GrScheduleNew /> {"  "}
                <a href="https://www.google.com/">Quiz 1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
