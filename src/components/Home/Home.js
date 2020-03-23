import React, { useEffect } from "react";
import "./style.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import HomepageSvg from "../HomepageSvg";
import HomeTitle from "../HomeTitle/HomeTitle";

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
  // conrtols what image is rendered on drag
  const computerImg = useTransform(x, [10, 500], [0, 1]);
  const userImg = useTransform(x, [-10, -500], [0, 1]);
  // controls the words shown on drag
  const welcomeShow = useTransform(x, [-80, -40, 40, 80], [0, 1, 1, 0]);
  const projectShow = useTransform(x, [30, 80], [0, 1]);
  const aboutShow = useTransform(x, [-30, -80], [0, 1]);

  // controls the stroke linecap value (so it doesn't appear immediately upon load)
  const xRange = [-1000, -100, 100, 1000];
  const userLinecap = useTransform(x, xRange, ["round", "round", "", ""]);
  const compLinecap = useTransform(x, xRange, ["", "", "", "round"]);

  // defines exit param for animate presence (from Router)
  const exit = {
    opacity: 0,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  return (
    <motion.div className="example-container" exit={exit}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        // onDragEnd={() => console.log(x.current)}
        // onDragEnd={handleDragEnd}
      >
        <HomepageSvg
          color={color}
          computerImg={computerImg}
          userImg={userImg}
          userLinecap={userLinecap}
          compLinecap={compLinecap}
        />
        <HomeTitle show={welcomeShow} text={"Welcome"} />
        <HomeTitle show={projectShow} text={"Projects"} />
        <HomeTitle show={aboutShow} text={"About"} />
      </motion.div>
    </motion.div>
  );
};

export default Home;
