import React, { useState } from "react";
import { FaExclamation } from "react-icons/fa";
import QuestionCard from "../QuestionCard";
import { useSelector } from "react-redux";
import { KanbasState } from "../../../../store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as answerClient from "../answerClient";
import * as questionClient from "../client";
import { setAnswers } from "../../../../store/answersReducer";

const QuizPreview = () => {
  const { courseId, quizId } = useParams();
  // const [selectedQuestion, setSelectedQuestion] = useState(null);
  // const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const questionList = useSelector(
    (state: KanbasState) => state.questionsReducer.questions
  );
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const dispatch = useDispatch();

  const handleQuestionClick = (question: any) => {
    const questionId = question._id;
    // setSelectedQuestionId(questionId);
    questionClient.fetchQuestionById(questionId);
    answerClient.findAnswersForQuestion(questionId).then((answers) => {
      dispatch(setAnswers(answers));
    });
  };

  // useEffect(() => {
  //   handleQuestionClick(question);
  // }, [question._id]);

  return (
    <div>
      <h2>{quiz.title}</h2>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFCCCC",
          color: "red",
        }}
      >
        <FaExclamation />{" "}
        <p style={{ marginLeft: "10px" }}>
          This is preview of the published version of the quiz
        </p>
      </span>
      <div>
        <h3>Quiz Instructions</h3>
        <hr />
        <QuestionCard questionId={selectedQuestionId} />
      </div>
      <div className="m-2">
        <button className="btn btn-secondary ">Next</button>
      </div>
      <div className="m-2">
        <button className="btn btn-primary  ">Submit Quiz</button>
      </div>
      <div className="m-2">
        <button className="btn btn-primary">
          <Link
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-questions`}
          >
            Keep Editing This Quiz
          </Link>
        </button>
      </div>
      <div>
        Questions
        {/* map all the questions, display only quiz title */}
        <div>
          <ul className="list-group list-group-flush">
            <div>
              {Array.isArray(questionList) &&
                questionList
                  .filter((question) => question.quiz === quizId)
                  .map((question: any, index: any) => {
                    return (
                      <li key={index} className="list-group-item">
                        <button onClick={() => handleQuestionClick(question)}>
                          {question.title}
                        </button>
                      </li>
                    );
                  })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizPreview;
