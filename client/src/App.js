import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Course from "./pages/Course";
import Question from "./pages/Question";
import Results from "./pages/Results";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h2>I'm gonna make an AP Practice App!</h2>
//         </div>       
//       </div>
//     );
//   }
// }

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
