import React from "react";

export default function AddNote(props) {
  return (
    <section>
      <header className="banner" role="banner">
        <h1>Add Notes Here</h1>
      </header>
      <form>
        <fieldset>
          <label htmlFor="note">
            <input id="note" defaultValue="Add a Note Here" name="" />
          </label>
        </fieldset>
      </form>
    </section>
  );
}
