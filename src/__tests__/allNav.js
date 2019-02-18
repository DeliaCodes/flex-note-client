import React from "react";
import ReactDOM from "react-dom";
import AllNav from "../AllNav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AllNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
