import React from "react";
import { connect } from "react-redux";
import "./css/NoteFeed.css";

export function NoteFeed(props) {
  return (
    <section className="notes">
      <header className="banner" role="banner">
        <h1>My Notes</h1>
      </header>
      {/*
      is props.id right?
      */}
      <div id={props.notes.id}>
        <p>{props.notes.title}</p>
        <p>{props.notes.text}</p>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(NoteFeed);
