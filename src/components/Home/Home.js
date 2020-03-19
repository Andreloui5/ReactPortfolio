import React from "react";
// import { motion } from "framer-motion";
import "./style.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div className="welcome">
      <h1>Welcome</h1>
    </motion.div>
  );
}

export default Home;
