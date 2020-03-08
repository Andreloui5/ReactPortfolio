import React from "react";
import { motion } from "framer-motion";
import Thumbnail from "../Thumbnail";
import Chicken from "../assets/images/Chicken.png";
import GameStart from "../assets/images/GameStart.gif";
import "./style.css";

const myProjects = [Chicken, GameStart];

function Projects() {
  return (
    <div className="projects">
      <motion.div
        className="thumbnails"
        // on exit, thumbnails should disappear in succession
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* map through myProjects array (has imgs of projects I've done)- then makes thumbnail of each */}
        {myProjects.map(item => (
          <Thumbnail
            key={myProjects.indexOf(item)}
            src={item}
            alt={`App Preview ${myProjects.indexOf(item) + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
