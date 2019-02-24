import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import AllNav from "../AllNav";
import store from "../store";
import { Provider } from "react-redux";


describe('new render for AllNav', () => {
  it("renders without crashing", () => {

    shallow(<AllNav />)
    /* const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}> <AllNav /> </Provider>, div);
    ReactDOM.unmountComponentAtNode(div); */
  });

})


