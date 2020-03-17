import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";

const FontAwes = props => {
  return (
    <Col>
      <a href={props.href} target={props.target}>
        <i className={`${props.className} icon`} title={props.title}></i>
      </a>
    </Col>
  );
};
export default FontAwes;
