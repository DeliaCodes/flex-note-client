import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/Nav-Auth.css";

export function NavAuth(props) {
  return (
    <li className="nav">
      <Link to={props.navUrl}>
        {props.navName}
      </Link>
    </li>
  );
}

NavAuth.defaultProps = {
  navUrl: "/login",
  navName: "Login",
};

const mapStateToProps = state => ({
  navUrl: state.navUrl,
  navName: state.navName,
})

export default connect(mapStateToProps)(NavAuth)
