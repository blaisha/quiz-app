import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import axios from "axios";
import Question from "./Question";

export default function Quiz() {
  const { quizState, setQuizState } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setQuestions(response.data.results);
    setLoaded(true);
  }

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  if (loaded) {
    return (
      <div className="quiz">
        <Question questions={questions} loaded={true} />
        <button onClick={() => setQuizState("endScreen")}>
          Click to reveal score!
        </button>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
}
