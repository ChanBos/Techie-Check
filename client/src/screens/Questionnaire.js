/* eslint-disable eqeqeq */
// Imported React library.
import React, { useState } from "react";
// Imported useLocation from React Router.
import { useLocation } from "react-router-dom";
// Imported stylesheet.
import "../App.css";
// Imported components from Bootstrap.
import { Row, Col, Card, Button } from "react-bootstrap";

const Questionnaire = (error) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [style, setStyle] = useState("");
  const [score, setScore] = useState(0);

  const location = useLocation();
  const quiz = location.state.quiz;
  console.log(quiz);

  const correctAnswers = quiz.map((answer) => answer.correct_answers);

  const answerCheckA = correctAnswers.map((answer) => answer.answer_a_correct);
  console.log(answerCheckA);
  // const checkA = answerCheckA.map((answer) => answer
  // console.log(checkA);
  const answerCheckB = correctAnswers.map((answer) => answer.answer_b_correct);
  const answerCheckC = correctAnswers.map((answer) => answer.answer_c_correct);
  const answerCheckD = correctAnswers.map((answer) => answer.answer_d_correct);
  const answerCheckE = correctAnswers.map((answer) => answer.answer_e_correct);
  const answerCheckF = correctAnswers.map((answer) => answer.answer_f_correct);

  const checkAnswers = (e) => {
    const selectedAnswer = e.target.value;
    setSelectedAnswer(selectedAnswer);
    console.log("Selected Answer: " + selectedAnswer);

    if (answerCheckA == "true" && selectedAnswer == "answer_a") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerCheckB == "true" && selectedAnswer == "answer_b") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerCheckC == "true" && selectedAnswer == "answer_c") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerCheckD == "true" && selectedAnswer == "answer_d") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerCheckE == "true" && selectedAnswer == "answer_e") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerCheckF == "true" && selectedAnswer == "answer_f") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else {
      setStyle("incorrect-answer");
      setScore(score);
    }
    console.log("Score: " + score);
  };

  return (
    <div>
      <Row>
        <Col>
          <h3 className="quiz-component-header">
            Quiz: {quiz[0].category} &#10088; {quiz[0].difficulty} &#10089;
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {Object.keys(quiz).length !== 0 ? (
            quiz.map((content, i) => (
              <Card
                key={i}
                className="col-md-11 question-card"
                content={content}
              >
                <Card.Title>QUESTION {i + 1}</Card.Title>
                <Card.Body>
                  <Card.Text>{content.question}</Card.Text>
                </Card.Body>
                <Card.Title>SELECT YOUR ANSWER</Card.Title>
                {content.answers.answer_a !== null ? (
                  <Button
                    value="answer_a"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_a" ? style : undefined
                    }
                  >
                    a. {content.answers.answer_a}
                  </Button>
                ) : (
                  <div></div>
                )}
                {content.answers.answer_b !== null ? (
                  <Button
                    value="answer_b"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_b" ? style : undefined
                    }
                  >
                    b. {content.answers.answer_b}
                  </Button>
                ) : (
                  <div></div>
                )}
                {content.answers.answer_c !== null ? (
                  <Button
                    value="answer_c"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_c" ? style : undefined
                    }
                  >
                    c. {content.answers.answer_c}
                  </Button>
                ) : (
                  <div></div>
                )}
                {content.answers.answer_d !== null ? (
                  <Button
                    value="answer_d"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_d" ? style : undefined
                    }
                  >
                    d. {content.answers.answer_d}
                  </Button>
                ) : (
                  <div></div>
                )}
                {content.answers.answer_e !== null ? (
                  <Button
                    value="answer_e"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_e" ? style : undefined
                    }
                  >
                    e. {content.answers.answer_e}
                  </Button>
                ) : (
                  <div></div>
                )}
                {content.answers.answer_f !== null ? (
                  <Button
                    value="answer_f"
                    onClick={checkAnswers}
                    className={
                      selectedAnswer === "answer_f" ? style : undefined
                    }
                  >
                    f. {content.answers.answer_f}
                  </Button>
                ) : (
                  <div></div>
                )}
              </Card>
            ))
          ) : (
            <div>
              <h1>We Are Not Quite Ready For Your Excellence As Yet</h1>
              <h3>There are Currently No Questions For Your Query</h3>
              <h4>Watch This Space For Added Questions</h4>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

// Exporting Questionnaire.js to App.js
export default Questionnaire;
