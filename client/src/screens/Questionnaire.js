// Imported React library.
import React, { useState } from "react";
// Imported useLocation from React Router.
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
// Imported components from Bootstrap.
import { Row, Col, Card, Button } from "react-bootstrap";

const Questionnaire = (error) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [style, setStyle] = useState("");
  const [score, setScore] = useState(0);

  const location = useLocation();
  // const navigate = useNavigate();
  const quiz = location.state.quiz;
  console.log(quiz);
  const answersArray = quiz.map((answer) => answer.answers);
  console.log(answersArray);
  const answersPreview = quiz.map((answer) => answer.correct_answers);
  console.log(answersPreview);

  const checkAnswers = (e) => {
    const selectedAnswer = e.target.value;
    console.log("Selected Answer: " + selectedAnswer);
    setSelectedAnswer(selectedAnswer);

    const answerA = quiz.map(
      (answer) => answer.correct_answers.answer_a_correct
    );
    console.log(answerA);
    const answerB = quiz.map(
      (answer) => answer.correct_answers.answer_b_correct
    );
    const answerC = quiz.map(
      (answer) => answer.correct_answers.answer_c_correct
    );
    const answerD = quiz.map(
      (answer) => answer.correct_answers.answer_d_correct
    );
    const answerE = quiz.map(
      (answer) => answer.correct_answers.answer_e_correct
    );
    const answerF = quiz.map(
      (answer) => answer.correct_answers.answer_f_correct
    );

    if (answerA === "true" && selectedAnswer === "answer_a") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerB === "true" && selectedAnswer === "answer_b") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerC === "true" && selectedAnswer === "answer_c") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerD === "true" && selectedAnswer === "answer_d") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerE === "true" && selectedAnswer === "answer_e") {
      setStyle("correct-answer");
      setScore(score + 1);
    } else if (answerF === "true" && selectedAnswer === "answer_f") {
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
                <Card.Title>QUESTION</Card.Title>
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
