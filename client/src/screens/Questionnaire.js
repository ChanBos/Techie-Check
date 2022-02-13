/* eslint-disable eqeqeq */
// Imported React library.
import React, { useState } from "react";
// Imported Axios.
import axios from "axios";
// Imported useLocation from React Router.
import { useLocation } from "react-router-dom";
// Imported stylesheet.
import "../App.css";
// Imported components from Bootstrap.
import { Row, Col, Card, Button } from "react-bootstrap";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Set the initial states of the props.
 * Utilized the useLocation hook to get the props from the home page.
 * Created an object containing the answer options.
 * Generating id based on the the user input value. Utilizing the index (+ 1) to generate the id.
 * Created a masterData array to store all the data.
 * Created a function to set the selected answer if the event.target.value is equal to a value in the answerOptions array.
 * Created a function to check the user's answers. Mapped through the various options. If the user's answer is equal to the true correct answer,
 * the user will be given a point and the style will be updated. Otherwise no points will be awarded.
 * Using Axios to post the user's category, difficulty, and score to the http://localhost:8080/quiz/addresults endpoint.
 * @returns A component that displays the quiz questions, answer options and user scores.
 */

const Questionnaire = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [style, setStyle] = useState("");
  const [score, setScore] = useState(0);

  const location = useLocation();
  const quiz = location.state.quiz;

  const answerOptions = {
    a: "answer_a",
    b: "answer_b",
    c: "answer_c",
    d: "answer_d",
    e: "answer_e",
    f: "answer_f",
  };

  const questionIndex = Array.from({ length: quiz.length }, (_, i) => i + 1);

  const masterData = questionIndex.map((index, i) => {
    return {
      questionIndex: index,
      answerOptions: answerOptions,
      quiz: quiz[i],
    };
  });

  const setAnswer = (e) => {
    // const mappedValues = masterData.map((data) =>
    //   Object.values(data.answerOptions)
    // );
    const optionValues = Object.values(answerOptions);
    const selectedOption = e.target.value;
    const optionExists = Object.values(optionValues).includes(selectedOption);

    if (optionExists === true) {
      setSelectedAnswer(selectedOption);
      setStyle("selected-answer");
      console.log("State: " + selectedAnswer);
    } else {
      console.log("State: Nothing in State.");
    }
    console.log("Array: " + optionValues);
    console.log("Selected Option: " + selectedOption);
    console.log("Selected Option: " + typeof selectedOption);
    console.log("Exists: " + optionExists);
  };

  const checkAnswers = (e) => {
    const correctAnswers = masterData.map(
      (answer) => answer.quiz.correct_answers
    );

    const answerCheckA = correctAnswers.map(
      (answer) => answer.answer_a_correct
    );
    const answerCheckB = correctAnswers.map(
      (answer) => answer.answer_b_correct
    );
    const answerCheckC = correctAnswers.map(
      (answer) => answer.answer_c_correct
    );
    const answerCheckD = correctAnswers.map(
      (answer) => answer.answer_d_correct
    );
    const answerCheckE = correctAnswers.map(
      (answer) => answer.answer_e_correct
    );
    const answerCheckF = correctAnswers.map(
      (answer) => answer.answer_f_correct
    );

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
    console.log("Score: " + typeof score);

    const addData = async () => {
      try {
        let response = await axios({
          url: "http://localhost:8080/quiz/addresults",
          method: "post",
          data: {
            quiz: quiz[0].category,
            difficulty: quiz[0].difficulty,
            score: score,
          },
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          // console.log(response.data.message);
          Swal.fire({
            title: "SCORE: " + JSON.stringify((score / 10) * 100) + "%",
            text:
              "You scored " +
              JSON.stringify(score) +
              " out of " +
              JSON.stringify(quiz.length) +
              ".",
          }).then(() => {
            window.location.href = "/dashboard";
          });
        });
      } catch (error) {
        Swal.fire({
          title: "ERROR:",
          text: error.response.data,
        });
      }
    };
    addData();
  };

  return (
    <div>
      <Row>
        <Col>
          <h3 className="quiz-component-header">
            Quiz:&#160;
            {quiz[0].category} &#10088; {quiz[0].difficulty} &#10089;
          </h3>
        </Col>
      </Row>
      {Object.values(masterData).length !== 0 ? (
        <div>
          <Row>
            <Col>
              {masterData.map((content, i) => (
                <Card
                  key={i}
                  className="col-md-11 question-card"
                  content={content}
                >
                  <Card.Title>QUESTION {content.questionIndex}</Card.Title>
                  <Card.Body>
                    <Card.Text>{content.quiz.question}</Card.Text>
                  </Card.Body>
                  <Card.Title>SELECT YOUR ANSWER</Card.Title>
                  {content.quiz.answers.answer_a !== null ? (
                    <Button
                      value="answer_a"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_a" ? style : undefined
                      }
                    >
                      a. {content.quiz.answers.answer_a}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {content.quiz.answers.answer_b !== null ? (
                    <Button
                      value="answer_b"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_b" ? style : undefined
                      }
                    >
                      b. {content.quiz.answers.answer_b}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {content.quiz.answers.answer_c !== null ? (
                    <Button
                      value="answer_c"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_c" ? style : undefined
                      }
                    >
                      c. {content.quiz.answers.answer_c}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {content.quiz.answers.answer_d !== null ? (
                    <Button
                      value="answer_d"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_d" ? style : undefined
                      }
                    >
                      d. {content.quiz.answers.answer_d}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {content.quiz.answers.answer_e !== null ? (
                    <Button
                      value="answer_e"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_e" ? style : undefined
                      }
                    >
                      e. {content.quiz.answers.answer_e}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {content.quiz.answers.answer_f !== null ? (
                    <Button
                      value="answer_f"
                      onClick={(e) => setAnswer(e)}
                      className={
                        selectedAnswer === "answer_f" ? style : undefined
                      }
                    >
                      f. {content.quiz.answers.answer_f}
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </Card>
              ))}
            </Col>
          </Row>
          <Button type="submit" onClick={checkAnswers}>
            Check Score
          </Button>
          <h3>Score: {score} / 10</h3>
        </div>
      ) : (
        <div>
          <h3>There are Currently No Questions For Your Query</h3>
          <h4>Watch This Space For Added Questions</h4>
        </div>
      )}
    </div>
  );
};

// Exporting Questionnaire.js to App.js
export default Questionnaire;
