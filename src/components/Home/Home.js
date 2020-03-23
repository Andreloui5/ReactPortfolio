import React from "react";
import "./style.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useHistory } from "react-router-dom";
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
  const computerImg = useTransform(x, [10, 250], [0, 1]);
  const userImg = useTransform(x, [-10, -250], [0, 1]);
  // controls the words shown on drag
  const welcomeShow = useTransform(x, [-80, -40, 40, 80], [0, 1, 1, 0]);
  const initialShow = useTransform(x, [-10, 0, 0, 10], [0, 1, 1, 0]);
  const projectShow = useTransform(x, [30, 80], [0, 1]);
  const aboutShow = useTransform(x, [-30, -80], [0, 1]);

  // controls the stroke linecap value (so it doesn't appear immediately upon load)
  const xRange = [-80, -30, 30, 80];
  const userLinecap = useTransform(x, xRange, ["round", "round", "", ""]);
  const compLinecap = useTransform(x, xRange, ["", "", "", "round"]);

  // defines exit param for animate presence (from Router)
  const exit = {
    opacity: 0,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  };
  // provides words to be displayed in h4 element below
  const content = `<- Drag ->`;
  let history = useHistory();
  // route to appropriate page when x a certain value
  function handleDragEnd() {
    let value = x.get();
    if (value >= 80) {
      history.push("/projects");
    } else if (value <= -80) {
      history.push("/about");
    }
  }

  return (
    <motion.div className="example-container" exit={exit}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={e => handleDragEnd()}
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
        <motion.h4 id="dragMe" style={{ opacity: initialShow }}>
          {content}
        </motion.h4>
      </motion.div>
    </motion.div>
  );
};

export default Home;
