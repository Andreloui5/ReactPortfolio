import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

function Home() {
  return (
    <motion.div
      variants={imageVariants}
      initial="exit"
      animate="enter"
      exit="exit"
      className="welcome"
    >
      <h1>Welcome</h1>
    </motion.div>
  );
}

export default Home;
