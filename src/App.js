import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import AllNav from "./AllNav";
import Login from "./Login";
import Regis from "./Regis";
import AddNote from "./AddNote";
import NoteFeed from "./NoteFeed";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 
      Router goes here in place of landing 
      */}
          <AllNav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Regis} />
          <Route exact path="/add-note" component={AddNote} />
          <Route exact path="/my-notes" component={NoteFeed} />
        </div>
      </Router>
    );
  }
}

export default App;
