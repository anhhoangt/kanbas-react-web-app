import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store/store";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setPublish } from "../../../store/quizzesReducer";
import QuizPreview from "../QuizQuestionsEditor/QuizPreview";
const QuizDetails = () => {
  const { courseId, quizId } = useParams();
  const quizList = useSelector(
    (state: KanbasState) => state.quizzesReducer.quizzes
  );
  const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
  const [isPublished, setIsPublished] = useState(quiz.isPublished);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePublishToggle = async () => {
    setIsPublished(!isPublished);
    // dispatch action to update isPublished in your store
    dispatch(setPublish({ ...quiz, isPublished: !isPublished }));
  };
  // console.log(quiz);

  return (
    <div>
      <h2>Quizz Details</h2>
      <div className="row">
        <div className="col">
          <div className="float-end mb-3">
            <button
              className="btn btn-success m-1"
              onClick={handlePublishToggle}
            >
              {isPublished ? "Unpublish" : "Publish"}
            </button>
            <button className="btn ">
              <Link
                to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/preview`}
              >
                Preview
              </Link>
            </button>
            <button className="btn ml-2">
              <Link
                to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit-details`}
              >
                Edit
              </Link>
            </button>
            <button className="btn m-1">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        <hr />
        <div className="col">
          <div className="quiz-details w-75 mb-2">
            <h2>{quiz?.title}</h2>
            <table style={{ marginLeft: "200px" }}>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Quiz Type </b>
                </td>
                <td style={{ textAlign: "left" }}> {quiz?.quizType}</td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Point</b>
                </td>
                <td style={{ textAlign: "left" }}>{quiz?.point}</td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Assignment Group</b>
                </td>
                <td style={{ textAlign: "left" }}>{quiz?.assignmentGroup}</td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Shuffle Answer</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.shuffleAnswers ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Time Limit</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.timeLimit ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Multiple Attempts</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.multipleAttempts ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Show Correct Answers</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.showCorrectAnswer ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>One Question At a Time</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.oneQuestionAtATime ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Webcam Required</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.webcameRequired ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "20px" }}>
                  <b>Lock Questions After Answering</b>
                </td>
                <td style={{ textAlign: "left" }}>
                  {quiz?.lockQuestionAfterAnswering ? "Yes" : "No"}
                </td>
              </tr>
            </table>
            <table className="horizontal-table mt-4">
              <thead style={{ borderBottom: "1px solid black" }}>
                <tr>
                  <th style={{ padding: "0 30px" }}>Due</th>
                  <th style={{ padding: "0 30px" }}>For</th>
                  <th style={{ padding: "0 30px" }}>Available From</th>
                  <th style={{ padding: "0 30px" }}>Until</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0 30px" }}>
                    {new Date(quiz?.dueDate).toLocaleDateString("en-US")}
                  </td>
                  <td style={{ padding: "0 30px" }}>Everyone</td>
                  <td style={{ padding: "0 30px" }}>
                    {new Date(quiz?.availableDate).toLocaleDateString("en-US")}
                  </td>
                  <td style={{ padding: "0 30px" }}>
                    {new Date(quiz?.availableUntilDate).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
