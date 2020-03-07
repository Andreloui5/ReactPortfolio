import React, { useState } from "react";
// Replace SVG file with your logo
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
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
        <h1> CRAIG GANT </h1>
      </Header>
      <div className="App">
        {/* Setting up routes to be used */}
        <Route exact path={("/", "/projects")} component={Projects} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
