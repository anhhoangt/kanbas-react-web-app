import React, { useState } from "react";
import FillInBlanksEditor from "../FillInBlankEditor";
import MultipleChoiceEditor from "../MultipleChoiceEditor";

const TrueFalseEditor = () => {
  // const [title, setTitle] = useState("");
  // const [points, setPoints] = useState(0);
  // const [question, setQuestion] = useState("");
  // const [correctAnswer, setCorrectAnswer] = useState(false);
  const [questionType, setQuestionType] = useState("");

  const handleSave = () => {
    // Save the question
  };

  const handleCancel = () => {
    // Discard changes
  };

  return (
    <div>
      <div className="container-fluid">
        <div style={{ display: "flex", alignItems: "stretch" }}>
          <input
            type="text"
            placeholder="Question Title"
            value="Question Title"
            style={{ flex: 1 }}
            className="form-control w-50"
          />
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            style={{ flex: 1 }}
            className="form-select w-25"
          >
            <option value="true/false">True/False</option>
            <option value="multiple choice">Multiple Choice</option>
            <option value="fill in blank">Fill in Blank</option>
          </select>
          {/* {questionType === "multiple choice" && <MultipleChoiceEditor />}
          {questionType === "fill in blank" && <FillInBlanksEditor />} */}
          <div className="float-end" style={{ flex: 1 }}>
            pts: <input type="number" value="1" />
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
            value="2+2="
            rows={4}
          />
        </div>
        <div>
          <h5>Answers:</h5>
          <div>
            <input
              type="radio"
              id="true"
              name="answer"
              value="true"
              // checked={quiz.answer === 'true'}
              // onChange={(e) => dispatch(setQuiz({ ...quiz, answer: e.target.value }))}
            />
            <label htmlFor="true">True</label>
          </div>
          <div>
            <input
              type="radio"
              id="false"
              name="answer"
              value="false"
              // checked={quiz.answer === 'false'}
              // onChange={(e) => dispatch(setQuiz({ ...quiz, answer: e.target.value }))}
            />
            <label htmlFor="false">False</label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">Update Question</button>
        <button className="btn btn-primary">Cancel</button>
      </div>
    </div>
  );
};

export default TrueFalseEditor;
