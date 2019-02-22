import React from "react";
import {connect} from "react-redux";
import "./css/NoteFeed.css";

export function NoteFeed(props) {
  return (
    <section id="posts">
      <header className="banner" role="banner">
        <h1>My Notes</h1>
      </header>
      {/*
      is props.id right?
      */}
      <div id={props.posts.id}>
        <p>{props.posts.title}</p>
        <p>{props.posts.text}</p>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
posts: state.posts
})

export default connect(mapStateToProps)(NoteFeed);
