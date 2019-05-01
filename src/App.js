import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Paper from "@material-ui/core/Paper";

import "./App.css";
import Main from "./views/main/Main";
import Details from "./views/detail/Details";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/details/:id" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
