import React from "react";
import {BrowserRouter as Link} from "react-router-dom";
import NavAuth from "./Nav-Auth";

export default function AllNav(props) {
  return (
    <nav role="navigation">
         <li className="nav">
      <Link to="/">
      Flex Note Home
        </Link>
        </li>
      <NavAuth />
      <li className="nav">
      <Link to="my-notes">
      My Notes
        </Link>
        </li>
      <li className="nav">
      <Link to="/add-note">
        Add A Note
        </Link>
        </li>
    </nav>
  );
}


        
