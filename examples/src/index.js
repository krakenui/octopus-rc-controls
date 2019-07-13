import React from "react";
import { render } from "react-dom";
import NavDropdown from "../../src";

const options = ["one", "two", "three"];

const App = () => (
  <NavDropdown
    options={options}
    placeholder="All category"
    name="category"
    value-prop="value"
  />
);
render(<App />, document.getElementById("root"));
