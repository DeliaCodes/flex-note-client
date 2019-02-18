import React from "react";

import NavAuth from "./Nav-Auth";

export default function AllNav(props) {
  return (
    <nav role="navigation">
      <a href="/" className="nav">
        Flex Note Home
      </a>
      <NavAuth />
      <a href="/myNotes" className="nav">
        My Notes
      </a>
      <a href="/addNote" className="nav">
        Add A Note
      </a>
    </nav>
  );
}
