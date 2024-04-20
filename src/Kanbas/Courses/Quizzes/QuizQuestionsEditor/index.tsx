import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { KanbasState } from "../../../store/store";
import * as client from "../client";
import * as questionsClient from "./client";
import {
  addQuestion,
  deleteQuestion,
  setQuestions,
  setQuestion,
} from "../../../store/questionsReducer";
import {
  addQuiz,
  updateQuiz,
  setQuiz,
  setPublish,
} from "../../../store/quizzesReducer";

const QuizQuestionsEditor = () => {
  const { courseId, quizId } = useParams();
  const quizList = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const questionList = useSelector(
    (state: KanbasState) => state.questionsReducer.questions
  );
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateQuiz = async () => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };

  const handleUpdateAndPublish = async () => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
    dispatch(setPublish({ ...quiz, isPublished: true }));
  };

  //about the question
  const handleAddQuestion = () => {
    questionsClient.createQuestion(quizId, question).then((question) => {
      dispatch(addQuestion(question));
      const questionId = question._id;
      navigate(
        `/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions/Questions/multiple/${questionId}`
      );

      // Update the quiz points
      const updatedQuiz = {
        ...quiz,
        point: quiz.point + question.points,
        numberOfQuestions: questionList.length + 1,
      };
      client.updateQuiz(updatedQuiz).then(() => {
        dispatch(updateQuiz(updatedQuiz));
      });
    });
  };

  useEffect(() => {
    questionsClient.findQuestionsForQuiz(quizId).then((questions) => {
      dispatch(setQuestions(questions));
    });
  }, [quizId]);

  return (
    <div>
      {/* to do: display lists of questions for this quiz. questionList */}
      <div className="row ">
        <div className="col">
          <div className="float-end mb-3">
            <span>
              Points {quiz.points}{" "}
              {quiz?.isPublished ? "Published" : "Unpublished"}
              <button className="btn">
                <BsThreeDotsVertical />
              </button>
            </span>
          </div>
        </div>
        <hr />
        <div className="col mb-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-details`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Questions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* display list of quizzes.title */}
        <div>
          <ul className="list-group list-group-flush">
            <div>
              {Array.isArray(questionList) &&
                questionList
                  .filter((question) => question.quiz === quizId)
                  .map((question: any, index: any) => {
                    return (
                      <li key={index} className="list-group-item">
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions/Questions/multiple/${question._id}`}
                          onClick={() => dispatch(setQuestion(question))}
                        >
                          <h5>{question.title}</h5>
                        </Link>
                        <div className="float-right">
                          <button
                            className="btn"
                            onClick={() => {
                              questionsClient
                                .deleteQuestion(question._id)
                                .then((status: any) => {
                                  dispatch(deleteQuestion(question._id));
                                });
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    );
                  })}
            </div>
          </ul>
        </div>

        <div>
          <button
            className="btn m-2"
            onClick={() => {
              handleAddQuestion();
            }}
          >
            <FaPlus /> New Question
          </button>
          <button className="btn m-2">
            <FaPlus /> New Question Group
          </button>
          <button className="btn m-2">
            <SlMagnifier /> Questions
          </button>
        </div>
        <div className="mt-2 border">
          <div className="float-end">
            <button className="btn m-1">
              <Link to={`/Kanbas/Courses/${courseId}/Quizzes`}>Cancel</Link>
            </button>
            <button onClick={handleUpdateAndPublish} className="btn m-1">
              <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}>
                Save & Publish
              </Link>
            </button>
            <button onClick={handleUpdateQuiz} className="btn btn-warning m-1">
              <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/`}>
                Save
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionsEditor;
