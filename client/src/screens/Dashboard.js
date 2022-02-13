// Imported React library.
import React, { useState, useEffect } from "react";
// Imported Axios.
import axios from "axios";
// Imported components from Bootstrap.
import { Row, Table, Col } from "react-bootstrap";
// Importing Font Awesome library.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Imported components.
import RemoveDataEntry from "../components/RemoveDataEntry";

/**
 * Created a dashboard component to display the user's dashboard.
 * Set the initial states of the props.
 * Getting the data via the the useEffect() hook and the Axios GET method from http://localhost:8080/quiz/getall and from
 * http://localhost:8080/users/getallusers.
 * If all is in order the list of commercial projects will be displayed. If an error occurs an error will be displayed.
 * The dashboard will display the user's name, email address, quiz category, quiz difficulty, results and percentage.
 * The user will be able to download the results and delete the results.
 * @returns Dashboard component that displays the user's information and results via a responsive table.
 */

const Dashboard = () => {
  const [quiz, setQuiz] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const quiz = await (
          await axios.get("http://localhost:8080/quiz/getall")
        ).data;
        setQuiz(quiz);
        console.log(quiz);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const user = await (
          await axios.get("http://localhost:8080/users/getallusers")
        ).data;
        setUser(user);
        console.log(user);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);

  return (
    <div>
      <Row>
        <Col className="col-md-11 intro-paragraph">
          <Row>
            <h3 className="h3-main-headers">Your Dashboard</h3>
          </Row>
          {user.map((users, i) => {
            return (
              <Row key={i}>
                <Table size="lg" bordered responsive="md" id="dashboard-table">
                  <thead className="bs">
                    <tr>
                      <th>Name:</th>
                      <th>Surname:</th>
                      <th>Email Address:</th>
                      <th>Quiz Category:</th>
                      <th>Quiz Difficulty:</th>
                      <th>Results:</th>
                      <th>Percentage:</th>
                      <th>Remove:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quiz.map((quizData, i) => {
                      return (
                        <tr key={i}>
                          <td>{users.Name}</td>
                          <td>{users.Surname}</td>
                          <td>{users.Email}</td>
                          <td>{quizData.name}</td>
                          <td>{quizData.difficulty}</td>
                          <td>{quizData.score} / 10</td>
                          <td>{(quizData.score / 10) * 100}%</td>
                          <td>
                          <RemoveDataEntry key={quizData._id} {...quizData} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

// Exporting Dashboard.js to App.js.
export default Dashboard;
