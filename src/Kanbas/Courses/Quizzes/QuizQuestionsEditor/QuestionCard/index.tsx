import React from "react";
import { useSelector } from "react-redux";
import { KanbasState } from "../../../../store/store";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const QuestionCard = (questionId: any) => {
  const { courseId, quizId } = useParams();
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const answerList = useSelector(
    (state: KanbasState) => state.answersReducer.answers
  );

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
          <h5>{question.title}</h5>
          <div>{question.points} pts</div>
        </div>
        <p>{question.questionText}</p>

        {/*  show answerList of this question */}
        <div>
          {Array.isArray(answerList) &&
            answerList
              .filter((answer: any) => answer.question === question._id)
              .map((answer: any, index: any) => (
                <li className="list-group-item" key={index}>
                  <input type="radio" name="answer" value={answer.isCorrect} />
                  <input type="text" value={answer.text} />
                </li>
              ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
