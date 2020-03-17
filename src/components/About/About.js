import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Portrait from "../assets/images/aiportrait.png";
import FontAwes from "../FontAwes/FontAwes";
import "./style.css";

function About(props) {
  return (
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
              from the University of Central Florida. Skills include HTML, CSS,
              JavaScript, jQuery, Node.js, MySQL, MongoDB and React. Versed in
              CSS frameworks such as Bootstrap and Materialize, Node frameworks
              such as Express.js, and ORMs (and ODMs) like Sequelize and
              Mongoose. In addition, years as a professional copywriter and
              editor instilled a passion for detail and quality execution. Has a
              bachelor’s degree in music from the University of Nebraska at
              Omaha and worked full-time in the music industry for over a
              decade. Thrives in a fast-paced, detail-oriented environment and
              loves collaborating with others and leveraging experiences and
              skills to further joint goals and projects.
            </p>
          </Row>
          <Row align="center" className="m-2">
            <FontAwes
              href="mailto:craigkgant@gmail.com"
              className="fas fa-envelope"
              title="Email"
            />
            <FontAwes
              href="https://www.linkedin.com/in/craig-gant-057358190/"
              target="_blank"
              className="fab fa-linkedin-in"
              title="LinkedIn"
            />
            <FontAwes
              href="https://github.com/Andreloui5"
              target="_blank"
              className="fab fa-github"
              title="Github"
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
