import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail"
import "./Styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;