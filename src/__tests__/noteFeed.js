import React from "react";
import ReactDOM from "react-dom";
import NoteFeed from "../NoteFeed";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NoteFeed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
