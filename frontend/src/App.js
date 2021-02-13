import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ContactRequest from "./pages/contact-request/ContactRequest";
import companyLogo from "./content/internal/monument-logo.png";
import "./app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <h1 style={{ color: "white" }}>Contact Request Form</h1>
            <ContactRequest />
            <img className="companyLogo" src={companyLogo} alt="company logo" />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
