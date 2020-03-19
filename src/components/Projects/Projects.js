import React from "react";
import { motion } from "framer-motion";
import Thumbnail from "../Thumbnail/Thumbnail";
import projectArray from "../assets/projectArray";
import "./style.css";

function Projects() {
  console.log(projectArray);
  return (
    <div className="projects">
      <motion.div
        className="thumbnails"
        // on exit, thumbnails should disappear in succession
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* map through projectArray (has projects I've done)- then makes thumbnail of each */}
        {projectArray.map(i => (
          <Thumbnail
            key={i.id}
            src={i.image}
            alt={`${i.name} App`}
            name={i.name}
            description={i.description}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
