import React from "react";
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

// const backVariants = {
//   exit: { x: 100, opacity: 0, transition },
//   enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
// };
const ProjectPage = () => {
  return <motion.div variants={imageVariants}></motion.div>;
};

export default ProjectPage;
