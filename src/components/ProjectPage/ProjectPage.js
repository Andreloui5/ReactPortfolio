import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectArray from "../assets/projectArray";
import FontAwes from "../FontAwes/FontAwes";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

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

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const ProjectPage = props => {
  // set initial state as the param :name.
  const [project, setProject] = useState(props.match.params.name);
  // Go through ProjectArray and find this project by its name
  useEffect(() => {
    const thisProject = ProjectArray.filter(i => i.name === project);
    // set hook to equal this project
    setProject(thisProject);
  }, []);
  console.log(project);

  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          <motion.div
            className="single"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.img
              variants={imageVariants}
              src={project[0].image}
              alt={project[0].name}
            />
          </motion.div>
        </Col>
        <Col sm={6}>
          <Row>
            <p>{project[0].description}</p>
          </Row>
          <Row>
            <FontAwes
              href={project[0].gitHub}
              target="_blank"
              className="fab fa-github gitIcon"
              title="Github"
            />
            <motion.div className="back" variants={backVariants}>
              <Link to="/projects">
                <FontAwes
                  className="far fa-arrow-alt-circle-left"
                  title="Back"
                />
              </Link>
            </motion.div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
