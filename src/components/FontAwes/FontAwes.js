import React from "react";
import "./style.css";

const FontAwes = props => {
  return (
    <div>
      <a href={props.href} target={props.target}>
        <i className={`${props.className} icon`} title={props.title}></i>
      </a>
    </div>
  );
};
export default FontAwes;
