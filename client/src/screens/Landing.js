// Imported React library.
import React from "react";
// Imported components from Bootstrap.
import { Row, Col, Image } from "react-bootstrap";

/**
 * Utilized Bootstrap components to create the Landing page.
 * @returns Landing page that displays the available quiz topics and links to the quiz.
 */

const Landing = () => {
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
