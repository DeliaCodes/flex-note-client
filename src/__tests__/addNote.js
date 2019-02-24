import React from "react";
import ReactDOM from "react-dom";
import AddNote from "../AddNote";
import store from "../store";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}> <AddNote /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
