// Imported React library.
import React from "react";
// Imported components from React Bootstrap.
import { Container, Row } from "react-bootstrap";
// Imported icons from FontAwesome.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/**
 * Created a footer for the application that displays text in a header format and a "Scroll to Top" button.
 * Created a function that, once the "Scroll to Top" button is clicked on, will scroll the page smoothly to the top.
 * @returns Footer with header text and a "Scroll to Top" button.
 */

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <h6 id="footer-header">
            CREATED WITH <FontAwesomeIcon icon={faHeart} />
            BY CHANELLE BÖSIGER
          </h6>
        </Row>
      </Container>
    </div>
  );
};

// Exported footer.js to App.js.
export default Footer;
