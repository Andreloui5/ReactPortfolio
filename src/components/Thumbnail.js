import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.5, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    // on exit, scale all images down and fade to opacity 0 using transition, but over a longer time
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: {
    scale: 1.05,
    borderRadius: "60%",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)"
  }
};

const imgVariants = {
  hover: { scale: 1.02 }
};

const Thumbnail = props => {
  return (
    <AnimatePresence>
      <motion.div
        className="thumbnail"
        variants={thumbnailVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          className="frame"
          whileHover="hover"
          variants={frameVariants}
          transition={transition}
        >
          <Link to={`/${props.name}`}>
            <motion.img
              whileHover="hover"
              variants={imgVariants}
              transition={transition}
              src={props.src}
              alt={props.alt}
            />
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Thumbnail;
