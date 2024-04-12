import { HiPlus } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { MdUnpublished } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store/store";
import * as client from "./client";
import {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuiz,
  setQuizzes,
  setPublish,
} from "../../store/quizzesReducer";

const Quizzes = () => {
  const { courseId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizList = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const [showMenu, setShowMenu] = useState(false);
  const [isPublished, setIsPublished] = useState(quiz.isPublished);

  const handleAddQuiz = () => {
    client.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
      const quizId = quiz._id;
      // console.log(quizId);
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`);
    });
  };

  const handleDeleteQuiz = (quizId: string) => {
    client.deleteQuiz(quizId).then((status) => {
      dispatch(deleteQuiz(quizId));
    });
  };

  const handlePublish = () => {
    dispatch(setPublish({ ...quiz, isPublished: !isPublished }));
    console.log("Publishing quiz");
  };

  useEffect(() => {
    client.findQuizzesForCourse(courseId).then((quizzes) => {
      dispatch(setQuizzes(quizzes));
    });
  }, [courseId]);

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
              <button
                className="wd-assignments-button-alert "
                onClick={() => {
                  handleAddQuiz();
                }}
              >
                <HiPlus /> Quizz
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
              <div>
                {quizList
                  .filter((quiz) => quiz.course === courseId)
                  .map((quiz: any, index: any) => {
                    const currentDate = new Date();
                    const availableDate = new Date(quiz.availableDate);
                    const availableUntilDate = new Date(
                      quiz.availableUntilDate
                    );
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
                      <li key={index} className="list-group-item">
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                          onClick={() => dispatch(setQuiz(quiz))}
                        >
                          <h5>{quiz.title}</h5>
                        </Link>
                        <b>{availabilityStatus}</b> | <b>Due</b>{" "}
                        {new Date(quiz?.dueDate).toLocaleDateString("en-US")} |
                        {"  "}
                        {quiz.numberOfQuestions} questions{"  "} | {"  "}
                        {quiz.point} Points{" "}
                        <div className="float-end">
                          {quiz.isPublished ? (
                            <ImCheckboxChecked />
                          ) : (
                            <MdUnpublished />
                          )}
                          <BsThreeDotsVertical
                            onClick={() => setShowMenu(!showMenu)}
                          />
                          {showMenu && (
                            <div>
                              <button
                                className="btn btn-primary ms-2"
                                onClick={() => dispatch(setQuiz(quiz))}
                              >
                                <Link
                                  to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                                >
                                  Edit
                                </Link>
                              </button>
                              <button
                                onClick={() => {
                                  handleDeleteQuiz(quiz._id);
                                }}
                              >
                                Delete
                              </button>
                              {quiz.isPublished ? (
                                <button onClick={handlePublish}>
                                  Unpublish
                                </button>
                              ) : (
                                <button onClick={handlePublish}>Publish</button>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quizzes;
