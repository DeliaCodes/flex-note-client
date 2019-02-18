import React from "react";
import {BrowserRouter as Link} from "react-router-dom";

export default function NavAuth(props) {
  return (
    <li className="nav">
      <Link to={props.url}>
      {props.name}
        </Link>
        </li>
  );
}

NavAuth.defaultProps = {
  url: "/login",
  name: "Login"
};
