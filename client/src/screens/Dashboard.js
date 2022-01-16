// Imported React library.
import React from "react";
// Imported components from Bootstrap.
import { Row, Table, Col } from "react-bootstrap";
// Importing Font Awesome library.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

/**
 * Created a dashboard component to display the user's dashboard.
 * @returns Dashboard component that displays the user's information and results via a responsive table.
 */

const Dashboard = () => {
  return (
    <div>
      <Row className="row-container">
        <Col className="col-md-11 intro-paragraph">
          <Row>
            <h3 className="h3-main-headers">Your Dashboard</h3>
          </Row>
          <Row>
            <Table size="lg" bordered responsive="md" id="dashboard-table">
              <thead className="bs">
                <tr>
                  <th>Name:</th>
                  <th>Email Address:</th>
                  <th>Quiz:</th>
                  <th>Results:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Return Name</td>
                  <td>Return Email Address</td>
                  <td>Return Quiz</td>
                  <td>Return Results</td>
                  <td>
                    <FontAwesomeIcon icon={faDownload} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Dashboard.js to App.js.
export default Dashboard;
