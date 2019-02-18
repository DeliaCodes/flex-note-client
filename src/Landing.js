import React from "react";

export default function Landing(props) {
  return (
    <section>
      <header className="banner" role="banner">
        <h1>Welcome to Flex Note</h1>
      </header>

      <p>A place to record thoughts using one of our many templates.</p>
      <a href="/login" className="nav">
        Login or Register Here
      </a>
    </section>
  );
}
