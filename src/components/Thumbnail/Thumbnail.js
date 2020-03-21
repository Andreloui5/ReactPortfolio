import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./style.css";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const thumbnailVariants = {
  initial: { scale: 0.5, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition
  },
  exit: {
    // on exit, scale all images down and fade to opacity 0 using transition, but over a longer time
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: {
    scale: 0.94,
    borderRadius: "60%",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)"
  }
};

const imgVariants = {
  hover: { scale: 1.1 }
};

const h2Variants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 }
};

const Thumbnail = props => {
  return (
    <motion.div className="thumbnail" variants={thumbnailVariants}>
      <motion.div
        className="frame"
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Link to={`/projects/${props.name}`}>
          {/* <motion.div
            className="title"
            variants={h2Variants}
            whileHover="hover"
            whileTap="hover"
            transition={transition}
          >
            <h2>{props.name}</h2>
          </motion.div> */}
          <motion.img
            whileHover="hover"
            whileTap="hover"
            variants={imgVariants}
            transition={transition}
            src={props.src}
            alt={props.alt}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Thumbnail;
