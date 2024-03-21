import { HiPlus } from "react-icons/hi2";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { MdUnpublished } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store/store";
import {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
} from "../../store/quizzesReducer";

const Quizzes = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const quizList = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

  return (
    <div>
      <div>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <input
                className="form-control"
                id="quizz-search"
                placeholder="Search for Quizzes"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <button className="wd-assignments-button-alert ">
                {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}> */}
                <HiPlus /> Quizz
                {/* </Link> */}
              </button>
              <button className="wd-assignments-button ">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <ul className="list-group wd-modules">
          <div
            className="m-2 border"
            style={{ borderLeft: "none", backgroundColor: "lightgray" }}
          >
            <span className="text-center">
              <FaEllipsisV className="me-2" /> ASSIGNMENT QUIZZES
            </span>
          </div>
          <li className="list-group-item">
            <ul className="list-group list-group-flush">
              {quizList
                .filter((quiz) => quiz.course === courseId)
                .map((quiz) => {
                  const currentDate = new Date();
                  const availableDate = new Date(quiz.availableDate);
                  const availableUntilDate = new Date(quiz.availableUntilDate);
                  let availabilityStatus = "";

                  if (currentDate > availableUntilDate) {
                    availabilityStatus = "Closed";
                  } else if (
                    currentDate >= availableDate &&
                    currentDate <= availableUntilDate
                  ) {
                    availabilityStatus = "Available";
                  } else if (currentDate < availableDate) {
                    availabilityStatus = `Not available until ${quiz.availableDate}`;
                  }

                  return (
                    <li className="list-group-item">
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                        onClick={() => dispatch(setQuiz(quiz))}
                      >
                        <h5>{quiz.title}</h5>
                      </Link>
                      <b>{availabilityStatus}</b> | <b>Due</b> {quiz.dueDate} |
                      {"  "}
                      {quiz.numberOfQuestions} questions{"  "} | {"  "}
                      {quiz.points} Points{" "}
                      <div className="float-end">
                        {quiz.isPublished ? (
                          <ImCheckboxChecked />
                        ) : (
                          <MdUnpublished />
                        )}
                        <BsThreeDotsVertical />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quizzes;
