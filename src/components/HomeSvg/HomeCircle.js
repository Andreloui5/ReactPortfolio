import React from "react";
import { motion } from "framer-motion";

const HomeCircle = props => {
  return (
    <svg
      className="progress-icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="210 180 225 225"
      width="225"
      height="199.47"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Circle */}
      <motion.path
        fill="none"
        strokeWidth="10"
        stroke={props.color}
        d="M413.06 289.49C413.06 344.53 368.25 389.22 313.06 389.22C257.87 389.22 213.06 344.53 213.06 289.49C213.06 234.44 257.87 189.75 313.06 189.75C368.25 189.75 413.06 234.44 413.06 289.49Z"
        style={{ translateX: 5, translateY: 5 }}
      />
    </svg>
  );
};

export default HomeCircle;
