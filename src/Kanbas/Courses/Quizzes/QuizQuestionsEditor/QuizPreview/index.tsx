import React from "react";
import { FaExclamation } from "react-icons/fa";
import QuestionCard from "../QuestionCard";

const QuizPreview = () => {
  return (
    <div>
      <h2>Quiz Title</h2>
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
        <QuestionCard />
      </div>
      <div className="m-2">
        <button className="btn btn-secondary ">Next</button>
      </div>
      <div className="m-2">
        <button className="btn btn-primary  ">Submit Quiz</button>
      </div>
      <div className="m-2">
        <button className="btn btn-primary  ">Keep Editing This Quiz</button>
      </div>
      <div>
        Questions
        {/* map all the questions, display only quiz title */}
      </div>
    </div>
  );
};

export default QuizPreview;
