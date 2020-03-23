import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const HomeTitle = props => {
  return (
    <motion.h1 className="words" style={{ opacity: props.show }}>
      {props.text}
    </motion.h1>
  );
};

export default HomeTitle;
