import React from "react";
import { motion } from "framer-motion";
import Thumbnail from "../Thumbnail/Thumbnail";
import projectArray from "../assets/projectArray";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { staggerChildren: 0.5 }
  },
  exit: {
    // on exit, scale all images down and fade to opacity 0 using transition, but over a longer time
    scale: 0.5,
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 1.5,
      ...transition
    }
  }
};

function Projects() {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-center p-2 m-2">Projects</h1>
        </Col>
      </Row>
      <div className="projects">
        {/* map through projectArray (has projects I've done)- then makes thumbnail of each */}
        <motion.div
          // on exit, thumbnails should disappear in succession
          className="thumbnails"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          initial="initial"
          animate="enter"
          exit="exit"
        >
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
    </div>
  );
}

export default Projects;
