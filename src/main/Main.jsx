import React from "react";
import { Route } from "react-router-dom";
import Home from "../screens/home/Home";
import About from "../screens/about/About";
import Projects from "../screens/projects/Projects";
import Contact from "../screens/contact/Contact";

const Main = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </>
  );
};

export default Main;
