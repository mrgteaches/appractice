import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Course from "./pages/Course";
import Question from "./pages/Question";
import Results from "./pages/Results";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Course} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
