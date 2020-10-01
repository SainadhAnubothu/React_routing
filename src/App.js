import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
import Header from "./components/header";
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Header}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </Router>
    </div>
  );
}

export default App;
