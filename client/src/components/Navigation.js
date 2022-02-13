// Imported React library.
import React from "react";
// Imported components from React Bootstrap.
import {
  Nav,
  Navbar,
  Col,
  Row,
  Image,
  Dropdown,
  Button,
} from "react-bootstrap";
// Importing Font Awesome library.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/**
 * Created a navigation function to display a navbar that changes, depending on whether the user is logged in or not.
 * Parsed the user's name that is stored in local storage and returning this as the dropdown value.
 * To allow a user to log out I created a function that removes the user from local storage. This will redirect them to the login page.
 * If the user is logged in, their name will display and they will have the option to logout.
 * All pages are displayed: Landing, Home, Profile, About, Activities, Contact and Logout.
 */

const Navigation = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div id="navbar">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Col className="col-md-9">
              <a href="/">
                <Image
                  src="./images/logo.png"
                  alt="Logo"
                  fluid="true"
                  id="logo"
                />
              </a>
            </Col>

            {user ? (
              <React.Fragment>
                <Col className="col-md-3" id="user-nav-col">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="generalnav">
                      <FontAwesomeIcon icon={faUser} />
                      {user.name} {user.surname}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/">Home</Dropdown.Item>
                      <Dropdown.Item href="/home">Quizzes</Dropdown.Item>
                      <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" onClick={logout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col className="col-md-3">
                  <Row id="auth-nav-container">
                    <h1 className="auth-h1">&#10094;</h1>
                    <Button href="/register" className="auth-button">
                      Register
                    </Button>
                    <h1 className="auth-h1">/</h1>
                    <Button href="/login" className="auth-button">
                      Login
                    </Button>
                    <h1 className="auth-h1">&#10095;</h1>
                  </Row>
                </Col>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

// Exporting Navbar to App.js
export default Navigation;
