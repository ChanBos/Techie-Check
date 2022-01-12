// Imported React library.
import React from "react";
// Imported components from Bootstrap.
import { Row, Col } from "react-bootstrap";

/**
 * Utilized Bootstrap components to create the Landing page.
 * @returns Landing page that displays the available quiz topics and links to the quiz.
 */

const Landing = () => {
  return (
    <div>
      <Row>
        <Col className="col-md-5 intro-paragraph">
          <h4>QUIZZES WITH A PURPOSE</h4>
          <p>
            Have fun learning and upskilling yourself or your team by completing
            technical quizzes. With a wide variety of questions you can test
            your knowledge on various technical topics, such as:
          </p>
          <ul>
            <li>Linux</li>
            <li>Bash</li>
            <li>Docker</li>
            <li>SQL</li>
            <li>CMS</li>
            <li>Code: HTML, JavaScript, PHP</li>
            <li>DevOps</li>
          </ul>
          <p>
            Simply select the preferred topic, the difficulty and dive straight
            in.
          </p>
          <p>
            Check in on your or your team's quiz outcomes via your personal or
            organization's dashboard.
          </p>
        </Col>
        <Col className="col-md-7"></Col>
      </Row>
    </div>
  );
};

// Exporting Landing.js to App.js.
export default Landing;
