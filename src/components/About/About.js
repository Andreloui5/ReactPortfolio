import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import Portrait from "../assets/images/aiportrait.png";
import FontAwes from "../FontAwes/FontAwes";
import "./style.css";

function About(props) {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    initial: { scale: 0.5, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      // on exit, scale all images down and fade to opacity 0 using transition, but over a longer time
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition }
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Container>
          <Row>
            <Col>
              <h1 className="text-center p-2 m-2">About</h1>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={12} align="center">
              <Image src={Portrait} alt="Craig Gant" fluid></Image>
            </Col>
            <Col md={8} sm={12} className="about">
              <Row>
                <p>
                  Full Stack Web Developer with a certificate in web development
                  from the University of Central Florida. Skills include HTML,
                  CSS, JavaScript, jQuery, Node.js, MySQL, MongoDB and React.
                  Versed in CSS frameworks such as Bootstrap and Materialize,
                  Node frameworks such as Express.js, and ORMs (and ODMs) like
                  Sequelize and Mongoose. In addition, years as a professional
                  copywriter and editor instilled a passion for detail and
                  quality execution. Has a bachelor’s degree in music from the
                  University of Nebraska at Omaha and worked full-time in the
                  music industry for over a decade. Thrives in a fast-paced,
                  detail-oriented environment and loves collaborating with
                  others and leveraging experiences and skills to further joint
                  goals and projects.
                </p>
              </Row>

              <Row align="center" className="m-2">
                <Col>
                  <FontAwes
                    href="mailto:craigkgant@gmail.com"
                    className="fas fa-envelope"
                    title="Email"
                  />
                </Col>
                <Col>
                  <FontAwes
                    href="https://www.linkedin.com/in/craig-gant-057358190/"
                    target="_blank"
                    className="fab fa-linkedin-in"
                    title="LinkedIn"
                  />
                </Col>
                <Col>
                  <FontAwes
                    href="https://github.com/Andreloui5"
                    target="_blank"
                    className="fab fa-github"
                    title="Github"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
