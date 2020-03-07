import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../StyledComponents/Card";
import Chicken from "../assets/images/Chicken.png";
import GameStart from "../assets/images/GameStart.gif";
import "./style.css";

const myProjects = [Chicken, GameStart];

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          {myProjects.map(item => (
            <>
              <Col sm={4}>
                <Card key={myProjects.indexOf(item)}>
                  <img
                    src={item}
                    alt={`App Preview ${myProjects.indexOf(item) + 1}`}
                  />
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
