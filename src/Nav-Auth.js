import React from "react";

export default function NavAuth(props) {
  return (
    <a href={props.url} className="nav">
      {props.name}
    </a>
  );
}

NavAuth.defaultProps = {
  url: "/login",
  name: "Login"
};
