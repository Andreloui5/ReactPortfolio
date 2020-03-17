import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Portrait from "../assets/images/aiportrait.png";
// import "./style.css";

function About(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center p-2 m-2">About</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6} className="m-1 p-1">
          <Image src={Portrait} alt="Craig Gant" fluid></Image>
        </Col>
        <Col lg={7} md={6} className="m-1 p-1">
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
          <Row>
            <Col>
              <a href="mailto:craigkgant@gmail.com">
                <i className="fa fa-envelope fontAwes" title="Email"></i>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
