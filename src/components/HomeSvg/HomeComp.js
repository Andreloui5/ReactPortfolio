import React from "react";
import { motion } from "framer-motion";

const HomeComp = props => {
  return (
    <svg
      className="progress-icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="210 180 225 225"
      width="225"
      height="199.47"
      preserveAspectRatio="xMidYMid meet"
      style={{ opacity: props.show }}
    >
      {/* Comp */}
      <motion.path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap={props.compLinecap}
        strokeWidth="8"
        stroke={props.color}
        d="M255.06 241.79L375.06 241.79L375.06 265.64L255.06 265.64L255.06 241.79ZM255.06 265.64L255.06 337.18L375.06 337.18L375.06 265.64 M327.06 285.51L341.06 301.41L327.06 317.31M303.06 285.51L289.06 301.41L303.06 317.31 M267.06 251.73C265.95 251.73 265.06 252.62 265.06 253.71C265.06 254.81 265.95 255.7 267.06 255.7C268.16 255.7 269.06 254.81 269.06 253.71C269.06 252.62 268.16 251.73 267.06 251.73Z M281.06 251.73C279.95 251.73 279.06 252.62 279.06 253.71C279.06 254.81 279.95 255.7 281.06 255.7C282.16 255.7 283.06 254.81 283.06 253.71C283.06 252.62 282.16 251.73 281.06 251.73Z M295.06 251.73C293.95 251.73 293.06 252.62 293.06 253.71C293.06 254.81 293.95 255.7 295.06 255.7C296.16 255.7 297.06 254.81 297.06 253.71C297.06 252.62 296.16 251.73 295.06 251.73Z"
        strokeDasharray="0 1"
        style={{ pathLength: props.computerImg }}
      />
    </svg>
  );
};

export default HomeComp;
