import React, { useState } from "react";
import TrueFalseEditor from "../TrueFalseEditor";
import MultipleChoiceEditor from "../MultipleChoiceEditor";

const FillInBlanksEditor = () => {
  const [blanks, setBlanks] = useState([{ text: "", answers: [""] }]);
  const [questionType, setQuestionType] = useState("");

  const handleAddBlank = () => {
    setBlanks([...blanks, { text: "", answers: [""] }]);
  };

  const handleRemoveBlank = (index: any) => {
    setBlanks(blanks.filter((_, i) => i !== index));
  };

  const handleBlankChange = (index: any, text: any, answers: any) => {
    const newBlanks = [...blanks];
    newBlanks[index] = { text, answers };
    setBlanks(newBlanks);
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
          {/* {questionType === "true/false" && <TrueFalseEditor />}
          {questionType === "multiple choice" && <MultipleChoiceEditor />} */}
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
            <h5>Blanks:</h5>
            {blanks.map((blank, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Blank"
                  value={blank.text}
                  onChange={(e) =>
                    handleBlankChange(index, e.target.value, blank.answers)
                  }
                />
                <input
                  type="text"
                  placeholder="Answer"
                  value={blank.answers[0]}
                  onChange={(e) =>
                    handleBlankChange(index, blank.text, [e.target.value])
                  }
                />
                <button onClick={() => handleRemoveBlank(index)}>Remove</button>
              </div>
            ))}
            <button onClick={handleAddBlank}>Add Another Answer</button>
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

export default FillInBlanksEditor;
