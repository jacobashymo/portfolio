import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/stylesheet.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Contact />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
