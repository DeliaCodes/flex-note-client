import React from "react";
import ReactDOM from "react-dom";
import NoteFeed from "../NoteFeed";
import store from "../store";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}> <NoteFeed /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
