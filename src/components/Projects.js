import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import Chicken from "./assets/images/Chicken.png";
import GameStart from "./assets/images/GameStart.gif";

const myProjects = [Chicken, GameStart];

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          {myProjects.map(item => (
            <>
              <Card md={4}>
                <Card.Img
                  key={myProjects.indexOf(item)}
                  src={item}
                  alt={`App Preview ${myProjects.indexOf(item) + 1}`}
                  rounded
                />
              </Card>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
