import React, { useState } from "react";
// Replace SVG file with your logo
import { BrowserRouter, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Header from "./StyledComponents/Header";
import "./App.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Places Header at top of the page */}
      <Header>
        {/* Clickable Menu toggle */}
        <Menu onClick={() => setIsNavOpen(true)} />
        {/* Expandable Navbar */}
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1> Craig Gant </h1>
      </Header>
      <div className="App">
        {/* Setting up routes to be used */}
        <Route exact path={("/", "/home")} component={Home} />
        <Route exact path={"/projects"} component={Projects} />
        <Route exact path="/projects/:name" component={ProjectPage}></Route>
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
