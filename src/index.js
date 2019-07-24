import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import About from "./About";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
