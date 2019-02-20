import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./css/Nav-Auth.css";

export default function NavAuth(props) {
  return (
    <Router>
      <li className="nav">
        <Link to={props.url}>
          {props.name}
        </Link>
      </li>
    </Router>
  );
}

NavAuth.defaultProps = {
  url: "/login",
  name: "Login"
};
