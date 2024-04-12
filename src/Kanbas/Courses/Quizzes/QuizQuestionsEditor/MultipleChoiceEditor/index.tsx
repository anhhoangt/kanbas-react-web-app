import React, { useState } from "react";
import TrueFalseEditor from "../TrueFalseEditor";
import FillInBlanksEditor from "../FillInBlankEditor";

const MultipleChoiceEditor = () => {
  const [choices, setChoices] = useState([{ text: "", isCorrect: false }]);
  const [questionType, setQuestionType] = useState("");

  const handleAddChoice = () => {
    setChoices([...choices, { text: "", isCorrect: false }]);
  };

  const handleRemoveChoice = (index: any) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  const handleChoiceChange = (index: any, text: any, isCorrect: boolean) => {
    const newChoices = [...choices];
    newChoices[index] = { text, isCorrect };
    setChoices(newChoices);
  };

  return (
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
        {/* {questionType === "true/false" && <TrueFalseEditor />}
        {questionType === "fill in blank" && <FillInBlanksEditor />} */}
        <div className="float-end" style={{ flex: 1 }}>
          pts: <input type="number" value="1" />
        </div>
      </div>
      <hr />
      <div className="row gx-3 mb-3">
        <p>
          Enter your question and multiple answers, then select the one correct
          answer.
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
        <h5>Choices:</h5>
        {choices.map((choice, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              checked={choice.isCorrect}
              onChange={(e) =>
                handleChoiceChange(index, choice.text, e.target.checked)
              }
              style={{ height: "fit-content" }}
            />
            <textarea
              value={choice.text}
              onChange={(e) =>
                handleChoiceChange(index, e.target.value, choice.isCorrect)
              }
              style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}
            />

            <button
              onClick={() => handleRemoveChoice(index)}
              style={{ height: "fit-content" }}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="m-3">
          <button onClick={handleAddChoice}>Add Another Choice</button>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary m-2">Update Question</button>
        <button className="btn btn-primary m-2">Cancel</button>
      </div>
    </div>
  );
};

export default MultipleChoiceEditor;
