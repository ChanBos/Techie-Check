// Imported React library.
import React, { useEffect } from "react";
// Imported components from Bootstrap.
import { Row, Col, Card, Button } from "react-bootstrap";

const Questionnaire = () => {
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=linux&difficulty=Easy&limit=10`;
    // TO ALLOW USER TO SELECT CATEGORY AND DIFFICULTY FROM HOME PAGE.

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // setResults(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Row className="row-container">
        <Col>
          <Card className="col-md-11 question-card">
            <Card.Title>QUESTION</Card.Title>
            <Card.Body>
              <Card.Text>Fetch Questions from API</Card.Text>
            </Card.Body>
            <Card.Title>SELECT YOUR ANSWER</Card.Title>
            <Button>Fetch Answer Options from API</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Questionnaire.js to App.js
export default Questionnaire;
