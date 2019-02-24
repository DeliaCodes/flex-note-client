import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavAuth from "./Nav-Auth";
import "./css/AllNav.css";

// @ts-ignore
export default function AllNav(props) {
  return (
    <Router>
      <nav role="navigation">
        <ul>
          <li className="nav">
            <Link to="/">Flex Note Home</Link>
          </li>
          <NavAuth props={props} />
          <li className="nav">
            <Link to="/my-notes">My Notes</Link>
          </li>
          <li className="nav">
            <Link to="/add-note">Add A Note</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}
