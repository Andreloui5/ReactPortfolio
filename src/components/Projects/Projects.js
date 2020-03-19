import React from "react";
import { motion } from "framer-motion";
import Thumbnail from "../Thumbnail/Thumbnail";
import projectArray from "../assets/projectArray";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

function Projects() {
  console.log(projectArray);
  return (
    <Container className="projects">
      <Row>
        <Col>
          <h1 className="text-center p-2 m-2">Projects</h1>
        </Col>
      </Row>
      <motion.div
        className="thumbnails"
        // on exit, thumbnails should disappear in succession
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <Row>
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
        </Row>
      </motion.div>
    </Container>
  );
}

export default Projects;
