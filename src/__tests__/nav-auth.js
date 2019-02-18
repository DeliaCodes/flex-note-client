import React from "react";
import ReactDOM from "react-dom";
import NavAuth from "../NavAuth";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavAuth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
