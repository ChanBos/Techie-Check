// Imported React library.
import React, { useState } from "react";
// Imported useNavigate from React Router Dom.
import { useNavigate } from "react-router-dom";
// Imported components from Bootstrap.
import { Row, Col, Card, Button, Form } from "react-bootstrap";

/**
 * Utilized Bootstrap components to create the Home page.
 * @returns Home page that displays the available quiz topics and links to the quiz.
 */

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  let categoryEntry = "";
  const quizCategory = (e) => {
    const category = e.target.value;
    categoryEntry = category;
    setCategory(categoryEntry);
  };

  let difficultyEntry = "";
  const quizDifficulty = (e) => {
    const difficulty = e.target.value;
    difficultyEntry = difficulty;
    setDifficulty(difficultyEntry);
  };

  const navigate = useNavigate();

  const submitQuizQuery = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category}&difficulty=${difficulty}&limit=10`;

    const fetchQuiz = async () => {
      try {
        const response = await fetch(url);
        const quiz = await response.json();
        setQuiz(quiz);
        navigate("/questionnaire", { state: { quiz: quiz } });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchQuiz();
  };

  return (
    <div>
      <Row>
        <Col className="col-md-2 intro-paragraph">
          <h3 className="h3-main-headers">How Tech-Savvy Are You?</h3>
          <h5>Get Started:</h5>
          <ol>
            <li>Select the preferred topic.</li>
            <li>Select the preferred difficulty.</li>
            <li>
              Each selection generates 10 multiple choice questions to be
              completed.
            </li>
            <li>
              After completing the questions, you will be displayed your
              results.
            </li>
            <li>Visit the dashboard to access records of your results.</li>
          </ol>
          <h5>&#10095;&#10095;&#10095; ENJOY!</h5>
        </Col>
        <Col className="col-md-9">
          <Row>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/linux.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">LINUX</Card.Title>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          isValid
                          value="linux"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/docker.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">DOCKER</Card.Title>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          value="docker"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/sql.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">SQL</Card.Title>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          value="sql"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/code.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">CODE</Card.Title>
                  <h6 id="code-sub-categories">(JAVASCRIPT, HTML, PHP)</h6>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          value="code"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/devops.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">DEVOPS</Card.Title>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          value="devops"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="topic-card">
                <Card.Img
                  src="./images/bash.png"
                  alt=""
                  className="topic-image"
                  fluid="true"
                />
                <div className="topic-image-overlay topic-image-overlay-blur">
                  <Card.Title className="topic-title">BASH</Card.Title>
                  <Row>
                    <Card.Text className="ready-text">Select Quiz:</Card.Text>
                    <Form>
                      <Row>
                        <Form.Check
                          value="bash"
                          onClick={quizCategory}
                        ></Form.Check>
                      </Row>
                    </Form>
                  </Row>
                  <Row>
                    <Button
                      className="difficulty-button"
                      value="Easy"
                      onClick={quizDifficulty}
                    >
                      Easy
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Medium"
                      onClick={quizDifficulty}
                    >
                      Medium
                    </Button>
                    <Button
                      className="difficulty-button"
                      value="Hard"
                      onClick={quizDifficulty}
                    >
                      Hard
                    </Button>
                  </Row>
                  <Row>
                    <Button className="go-button" onClick={submitQuizQuery}>
                      Go!
                    </Button>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Home.js to App.js.
export default Home;
