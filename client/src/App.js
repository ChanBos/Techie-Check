// Imported React library.
import React from "react";
// Imported stylesheet.
import "./App.css";
// Imported components from React Router Dom.
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Imported components.
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// Imported screens.
import Landing from "./screens/Landing";
import Home from "./screens/Home";
import Questionnaire from "./screens/Questionnaire";

/**
 * Created the App function and returning components to be exported to index.js.
 * Utilized BrowserRouter and Route from React-router-dom to navigate via links.
 * Added the React Bootstrap link.
 * @returns Application that returns all of the components.
 */

const App = (props) => {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <Navigation />
      <div>
        {props.children}
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Questionnaire" exact element={<Questionnaire />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

// Exporting App.js to index.js.
export default App;
