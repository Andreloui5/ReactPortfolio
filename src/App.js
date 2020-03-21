import React, { useState } from "react";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Header from "./StyledComponents/Header";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectPage from "./components/ProjectPage/ProjectPage";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <Router>
        {/* Places Header at top of the page */}
        <Header>
          {/* Clickable Menu toggle */}
          <Menu onClick={() => setIsNavOpen(true)} />
          {/* Expandable Navbar */}
          <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <h1> Craig Gant </h1>
        </Header>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path={("/", "/home")} component={Home} />
                <Route exact path={"/projects"} component={Projects} />
                <Route exact path="/projects/:name" component={ProjectPage} />
                <Route exact path="/about" component={About} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
