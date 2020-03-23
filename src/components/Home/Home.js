import React from "react";
import "./style.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomepageSvg from "../HomepageSvg";

const Home = () => {
  // variables to control animations

  // sets default val for x at 0
  const x = useMotionValue(0);
  // controls parameters for color transform
  const xInput = [-200, 0, 200];
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  // controls the stroke linecap value (so it doesn't appear immediately upon load)
  const computerImg = useTransform(x, [10, 500], [0, 1]);
  const userImg = useTransform(x, [-10, -500], [0, 1]);

  const xRange = [-1000, -100, 100, 1000];
  const userLinecap = useTransform(x, xRange, ["round", "round", "", ""]);
  const compLinecap = useTransform(x, xRange, ["", "", "", "round"]);

  // defines exit param for animate presence (from Router)
  const exit = {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  // let page = "";
  // // switch statement for drag end
  // function dragEnd(value) {
  //   switch (value) {
  //     case value >= 80:
  //       let page = "projects";
  //       break;
  //     case value <= -80:
  //       let page = "about";
  //       break;
  //     default:
  //       let page = "home";
  //   }
  // }

  // handle drag end
  // function handleDragEnd() {
  //   let value = x.get();
  //   dragEnd(value);
  //   console.log(page);
  // }

  return (
    <motion.div className="example-container" exit={exit}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        // onDragEnd={handleDragEnd}
      >
        <HomepageSvg
          color={color}
          computerImg={computerImg}
          userImg={userImg}
          userLinecap={userLinecap}
          compLinecap={compLinecap}
        />
      </motion.div>
      <br></br>
      <motion.div className="words">
        <Link to={"/about"}>
          <h2 id="about">About</h2>
        </Link>
        <h1>Welcome</h1>
        <Link to={"/projects"}>
          <h2 id="projects">Projects</h2>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
