import React from "react";
import ReactDOM from "react-dom";
import Regis from "../Regis";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Regis />, div);
  ReactDOM.unmountComponentAtNode(div);
});
