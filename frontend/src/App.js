import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ContactRequest from "./pages/contact-request/ContactRequest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ContactRequest />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
