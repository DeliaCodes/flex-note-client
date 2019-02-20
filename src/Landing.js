import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./css/Landing.css";


export default function Landing(props) {
  return (
    <Router>
      <section>
        <header className="banner" role="banner">
          <h1>Welcome to Flex Note</h1>
        </header>

        <p>A place to record thoughts using one of our many templates.</p>
        <Link to="/login" className="nav">
          Login or Register Here
      </Link>
      </section>
    </Router>
  );
}
