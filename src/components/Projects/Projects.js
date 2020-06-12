import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Thumbnail from "../Thumbnail/Thumbnail";
import projectArray from "../assets/projectArray";
import { Row, Col } from "react-bootstrap";
import Loading from "../Loader/Loading";
import "./style.css";

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
          variants={{
            exit: { transition: { staggerChildren: 0.1 } },
          }}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Suspense fallback={<Loading />}>
            {projectArray.map((i) => (
              <Thumbnail
                key={i.id}
                src={i.image}
                alt={`${i.name} App`}
                name={i.name}
                description={i.description}
              />
            ))}
            {/* if projectarray is odd in length, add a placeholder to the end of the list */}
            {projectArray.length / 2 === 0 ? (
              <div></div>
            ) : (
              <div className="placeholder"></div>
            )}
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
