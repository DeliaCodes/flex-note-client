import React from "react";
import ReactDOM from "react-dom";
import NavAuth from "../Nav-Auth";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavAuth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
