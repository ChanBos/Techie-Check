// Imported React library.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
// Imported components.
import Error from "../components/Error";
import Success from "../components/Success";

/**
 * Created a register function to allow the user to register.
 * Props: name, surname, email, password, error, success. Set the initial states.
 * Made use of an asynchronous function to Post the information to "/users/register".
 * If successful, the request will be sent and the user will be allowed to access the application. A message will display in the modal and the
 * user will be redirected to the application. setLoading is true when the request is sent and false when it is returned.
 * If an error occurs the error will be logged and an alert message will display in the modal. setLoading is false when an error is displayed.
 */

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      surname,
      email,
      password,
    };

    axios({
      url: "http://localhost:8080/users/register",
      method: "post",
      data: {
        Name: name,
        Surname: surname,
        Email: email,
        Password: password,
      },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setSuccess(true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        setTimeout(function () {
          window.location.href = "/login";
        }, 2000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="bs">
      <Row className="row-container">
        <Col className="col-md-5 auth-content">
          {error && (
            <Error message="Something went wrong. Please try again later." />
          )}
          {success && <Success message="Registered Successfully." />}
          <h3>Register</h3>
          <Form>
            <FormControl
              className="auth-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormControl
              className="auth-input"
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
            <FormControl
              className="auth-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormControl
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form>
          <Button onClick={(e) => handleRegister(e)}>Register</Button>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Register.js to App.js.
export default Register;
