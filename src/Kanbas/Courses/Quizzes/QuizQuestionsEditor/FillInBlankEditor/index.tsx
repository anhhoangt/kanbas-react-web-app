import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { KanbasState } from "../../../../store/store";
import { useDispatch } from "react-redux";
import {
  setAnswer,
  setAnswers,
  addAnswer,
  updateAnswer,
  deleteAnswer,
} from "../../../../store/answersReducer";
import {
  setQuestion,
  updateQuestion,
} from "../../../../store/questionsReducer";
import * as answersClient from "../answerClient";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import * as questionsClient from "../client";

const FillInBlanksEditor = () => {
  const { courseId, quizId, questionId } = useParams();
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );

  const answer = useSelector(
    (state: KanbasState) => state.answersReducer.answer
  );
  const answerList = useSelector(
    (state: KanbasState) => state.answersReducer.answers
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddChoice = () => {
    answersClient
      .createNewAnswer(questionId, { ...answer, isCorrect: true })
      .then((answer) => {
        dispatch(addAnswer(answer));
      });
  };

  const handleUpdateAnswer = async () => {
    const updatedAnswer = { ...answer, isCorrect: true };
    const status = await answersClient.updateAnswer(updatedAnswer);
    dispatch(updateAnswer(updatedAnswer));
  };

  const handleDeleteAnswer = (answerId: string) => {
    if (!window.confirm("Are you sure you want to delete this answer?")) {
      return;
    }
    answersClient.deleteAnswer(answerId).then((status) => {
      dispatch(deleteAnswer(answerId));
    });
  };

  const handleUpdateQuestion = async () => {
    const status = await questionsClient.updateQuestion(question);
    dispatch(updateQuestion(question));
  };

  const handleUpdateQuestionAndUpdateChoice = () => {
    handleUpdateAnswer();
    handleUpdateQuestion();
  };

  useEffect(() => {
    answersClient.findAnswersForQuestion(questionId).then((answers) => {
      dispatch(setAnswers(answers));
    });
  }, [questionId]);

  return (
    <div>
      <div className="container-fluid">
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <input
            type="text"
            placeholder="Question Title"
            value={question.title}
            onChange={(e) =>
              dispatch(setQuestion({ ...question, title: e.target.value }))
            }
            style={{ flex: 1 }}
            className="form-control w-50"
          />

          <div className="float-end" style={{ flex: 1 }}>
            pts:{" "}
            <input
              type="number"
              value={question.points}
              onChange={(e) =>
                dispatch(setQuestion({ ...question, points: e.target.value }))
              }
            />
          </div>
          <div className="col mb-5">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink
                  to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions/Questions/multiple/${questionId}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Multiple Choice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions/Questions/truefalse/${questionId}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  True/False
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions/Questions/fillblank/${questionId}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Fill In The Blank
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row gx-3 mb-3">
          <p>
            Enter your question and multiple answers, then select the one
            correct answer.
          </p>
          <h5>Question:</h5>
          <textarea
            className="form-control"
            placeholder="Enter your question here"
            value={question.questionText}
            onChange={(e) =>
              dispatch(
                setQuestion({ ...question, questionText: e.target.value })
              )
            }
            rows={4}
          />
        </div>
        <div>
          <h5>Answers:</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex m-2">
              <textarea
                className="form-control w-75 m-1"
                value={answer.text}
                onChange={(e) =>
                  dispatch(setAnswer({ ...answer, text: e.target.value }))
                }
              />
              <div className="m-3">
                <button
                  onClick={handleAddChoice}
                  className="btn btn-success m-1"
                >
                  Add
                </button>
                <button
                  onClick={handleUpdateAnswer}
                  className="btn btn-info m-1"
                >
                  Update
                </button>
              </div>
            </li>
            <div>
              {Array.isArray(answerList) &&
                answerList
                  .filter((answer: any) => answer.question === questionId)
                  .map((answer: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <p>Possible Answer:</p>
                      <input type="text" value={answer.text} />
                      <button
                        onClick={() => dispatch(setAnswer(answer))}
                        className="btn btn-primary m-1"
                      >
                        Edit
                      </button>
                      <button
                        // onClick={() => dispatch(deleteModule(module._id))}
                        onClick={() => handleDeleteAnswer(answer._id)}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary m-2" onClick={handleUpdateQuestion}>
          <Link
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions`}
          >
            Update Question
          </Link>
        </button>
        <button className="btn btn-primary m-2">
          <Link
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions`}
          >
            Cancel
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FillInBlanksEditor;
