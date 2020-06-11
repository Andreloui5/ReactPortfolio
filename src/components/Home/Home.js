import React, { useState } from "react";
import "./style.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useHistory } from "react-router-dom";
import HomepageSvg from "../HomeSvg/HomepageSvg";
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
    "rgb(3, 209, 0)",
  ]);
  // conrtols what image is rendered on drag
  const computerImg = useTransform(x, [10, 200], [0, 1]);
  const userImg = useTransform(x, [-10, -200], [0, 1]);
  // controls the words shown on drag
  const welcomeShow = useTransform(x, [-80, -40, 40, 80], [0, 1, 1, 0]);
  const initialShow = useTransform(x, [-10, 0, 0, 10], [0, 1, 1, 0]);
  const projectShow = useTransform(x, [-1000, 30, 80], [0, 0, 1]);
  const aboutShow = useTransform(x, [1000, -30, -80], [0, 0, 1]);

  // controls the stroke linecap value (so it doesn't appear immediately upon load)
  const xRange = [-20, -10, 10, 20];
  const userLinecap = useTransform(x, xRange, ["round", "round", "", ""]);
  const compLinecap = useTransform(x, xRange, ["", "", "", "round"]);
  // defines exit param for animate presence (from Router)
  const exit = {
    opacity: 0,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
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
    setIsHovered(false);
  }

  // Hook to keep state of mouse when hovered over main svg
  const [isHovered, setIsHovered] = useState(false);
  let shadow;

  isHovered
    ? (shadow = "0px 12px 12px rgba(0, 0, 0, 1)")
    : (shadow = "0px 0px 0px rgba(0, 0, 0, 1)");
  return (
    <motion.div className="example-container" exit={exit}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e) => handleDragEnd()}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onDrag={(e) => setIsHovered(true)}
        onMouseEnter={(e) => setIsHovered(true)}
        onMouseLeave={(e) => setIsHovered(false)}
      >
        <HomepageSvg
          color={color}
          computerImg={computerImg}
          compLinecap={compLinecap}
          show={projectShow}
          userImg={userImg}
          userLinecap={userLinecap}
          aboutShow={aboutShow}
          projectShow={projectShow}
          dropShadow={shadow}
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
