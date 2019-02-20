import React from "react";
import "./css/Regis.css";

export default function Regis(props) {
  return (
    <section className="mainSection">
      <header className="banner" role="banner">
        <h1>Register Here</h1>
      </header>
      <form>
        <fieldset>
          <label htmlFor="email">
            Email: <input id="email" defaultValue="Email" name="Email" />
          </label>
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
            id="registerSubmit"
            className="submit"
            type="submit"
            name="submit"
          />
        </fieldset>
      </form>
    </section>
  );
}
