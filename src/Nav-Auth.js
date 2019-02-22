import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {connect} from "react-redux";
import "./css/Nav-Auth.css";

export function NavAuth(props) {
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

const mapStateToProps = state => ({
  navUrl: state.navUrl,
  navName: state.navName,
})

export default connect(mapStateToProps)(NavAuth)