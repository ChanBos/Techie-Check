// Imported React library.
import React from "react";
// Imported components from React Bootstrap.
import { Nav, Navbar, Image, Dropdown } from "react-bootstrap";
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
            <Image src="./images/logo.png" alt="Logo" fluid="true" id="logo" />
            {user ? (
              <React.Fragment>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="generalnav">
                    <FontAwesomeIcon icon={faUser} />
                    {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={logout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Item>
                  <Nav.Link href="register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="login">Login</Nav.Link>
                </Nav.Item>
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
