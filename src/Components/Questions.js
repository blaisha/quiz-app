import React from "react";
import Question from "./Question";

export default function Questions({ questions, loaded }) {
  if (loaded) {
    return (
      <div className="Questions">
        {questions.map((question, index) => {
          let incorrect = questions[index].incorrect_answers;
          let correct = questions[index].correct_answer;
          const allAnswers = [...incorrect, correct];

          return (
            <Question index={index} question={question} answers={allAnswers} />
          );
        })}
      </div>
    );
  } else {
    return <div>Searching..</div>;
  }
}
