import React from "react";

const QuestionCard = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "10px",
        }}
        className="w-50"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h5>Question 1</h5>
          <div>1 pts</div>
        </div>
        <p>What is the capital of France?</p>
        <div>
          <input type="radio" id="paris" name="answer" value="paris" />
          <label htmlFor="paris">Paris</label>
        </div>
        {/* Add more choices here */}
      </div>
    </div>
  );
};

export default QuestionCard;
