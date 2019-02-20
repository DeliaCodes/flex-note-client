import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom";
import "./css/Login.css";

export default function Login(props) {
  return (
    <section className="mainSection">
    
      <header className="banner" role="banner">
        <h1>Login Below</h1>
      </header>
      <form>
        <fieldset>
          <label htmlFor="username">
            Username:{" "}
            <input id="username" defaultValue="Username" name="Username" />
          </label>
          <label htmlFor="password">
            Password:{" "}
            <input
              id="password"
              type="text"
              defaultValue="Password"
              name="Password"
            />
          </label>
          <input
            id="loginSubmit"
            className="submit"
            type="submit"
            name="submit"
          />
        </fieldset>
      </form>
      <Router>
      <Link to="/register">
        Register Here
      </Link>
      </Router>
    </section>
  );
}
