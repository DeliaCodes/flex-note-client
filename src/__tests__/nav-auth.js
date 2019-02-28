import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavAuth from "../Nav-Auth";
import store from "../store";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Router><NavAuth /></Router></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
