// Imported React library.
import React, { useState } from "react";
// Imported useNavigate from React Router Dom.
import { useNavigate } from "react-router-dom";
// Imported components from Bootstrap.
import { Row, Col, Image } from "react-bootstrap";

/**
 * Utilized Bootstrap components to create the Landing page.
 * Created a function to allow users to do a sample quiz.
 * Utilizing Axios to post the request to the API and useNavigate() to pass along the props to the Questionnaire page.
 * @returns Landing page that displays the available quiz topics and links to the quiz.
 */

const Landing = () => {
  const [quiz, setQuiz] = useState([]);

  const navigate = useNavigate();

  const submitQuizQuery = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10`;

    const fetchQuiz = async () => {
      try {
        const response = await fetch(url);
        const quiz = await response.json();
        setQuiz(quiz);
        console.log(quiz);
        navigate("/questionnaire", { state: { quiz: quiz } });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchQuiz();
  };

  return (
    <div id="landing-content">
      <Row>
        <Col className="col-md-6 intro-paragraph">
          <h3 className="h3-main-headers">Quizzes With A Purpose</h3>
          <p>
            Have fun learning and upskilling yourself or your team by completing
            technical quizzes.
          </p>
          <p>
            With a wide variety of questions you can test your knowledge on
            various technical topics, such as:
          </p>
          <ul>
            <Row>
              <Col>
                <li>Linux</li>
                <li>Bash</li>
                <li>Docker</li>
                <li>SQL</li>
              </Col>
              <Col>
                <li>CMS</li>
                <li>Code: HTML, JavaScript, PHP</li>
                <li>DevOps</li>
              </Col>
            </Row>
          </ul>
          <p>
            Simply select the preferred topic, the difficulty and dive straight
            in.
          </p>
          <p>
            Check in on your or your team's quiz outcomes via your personal or
            organization's dashboard.
          </p>
          <p>
            Create your account today to take advantage of these amazing
            quizzes.
          </p>
          <p>
            Try a sample quiz
            <font onClick={submitQuizQuery} id="sample-link">
              &#160;&#10094; here / &#10095;{" "}
            </font>
            if you are not yet convinced.
          </p>
        </Col>
        <Col className="col-md-5 landing-image">
          <Image
            src="./images/home.png"
            alt="Coding"
            fluid="true"
            id="home-img"
          />
        </Col>
      </Row>
    </div>
  );
};

// Exporting Landing.js to App.js.
export default Landing;
