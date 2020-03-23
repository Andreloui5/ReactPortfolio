import React from "react";
import "./style.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  const computerImg = useTransform(x, [10, 500], [0, 1]);
  const userImg = useTransform(x, [-10, -500], [0, 1]);

  const xRange = [-1000, -100, 100, 1000];
  const userLinecap = useTransform(x, xRange, ["round", "round", "", ""]);
  const compLinecap = useTransform(x, xRange, ["", "", "", "round"]);

  const exit = {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  return (
    <motion.div className="example-container" exit={exit}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg
          className="progress-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="210 200 225 225"
          width="225"
          height="199.47"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Circle */}
          <motion.path
            fill="none"
            strokeWidth="10"
            stroke={color}
            d="M413.06 289.49C413.06 344.53 368.25 389.22 313.06 389.22C257.87 389.22 213.06 344.53 213.06 289.49C213.06 234.44 257.87 189.75 313.06 189.75C368.25 189.75 413.06 234.44 413.06 289.49Z"
            style={{ translateX: 5, translateY: 5 }}
          />
          {/* Computer */}
          <motion.path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap={compLinecap}
            strokeWidth="8"
            stroke={color}
            d="M255.06 241.79L375.06 241.79L375.06 265.64L255.06 265.64L255.06 241.79ZM255.06 265.64L255.06 337.18L375.06 337.18L375.06 265.64 M327.06 285.51L341.06 301.41L327.06 317.31M303.06 285.51L289.06 301.41L303.06 317.31 M267.06 251.73C265.95 251.73 265.06 252.62 265.06 253.71C265.06 254.81 265.95 255.7 267.06 255.7C268.16 255.7 269.06 254.81 269.06 253.71C269.06 252.62 268.16 251.73 267.06 251.73Z M281.06 251.73C279.95 251.73 279.06 252.62 279.06 253.71C279.06 254.81 279.95 255.7 281.06 255.7C282.16 255.7 283.06 254.81 283.06 253.71C283.06 252.62 282.16 251.73 281.06 251.73Z M295.06 251.73C293.95 251.73 293.06 252.62 293.06 253.71C293.06 254.81 293.95 255.7 295.06 255.7C296.16 255.7 297.06 254.81 297.06 253.71C297.06 252.62 296.16 251.73 295.06 251.73Z"
            strokeDasharray="0 1"
            style={{ pathLength: computerImg }}
          />
          {/* User img */}
          <motion.path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap={userLinecap}
            strokeWidth="8"
            stroke={color}
            d="M312.48 299.92C301.07 299.92 297.75 296.18 290.77 296.18C272.78 296.18 258.19 310.25 258.19 327.6C258.19 328.19 258.19 332.98 258.19 333.58C258.19 339.77 263.4 344.8 269.83 344.8C278.36 344.8 346.61 344.8 355.14 344.8C361.56 344.8 366.77 339.77 366.77 333.58C366.77 332.98 366.77 328.19 366.77 327.6C366.77 310.25 352.18 296.18 334.2 296.18C327.24 296.18 323.9 299.92 312.48 299.92ZM269.83 333.58C269.83 329.99 269.83 327.99 269.83 327.6C269.83 316.47 279.23 307.4 290.77 307.4C294.31 307.4 300.05 311.14 312.48 311.14C325.01 311.14 330.64 307.4 334.2 307.4C345.74 307.4 355.14 316.47 355.14 327.6C355.14 327.99 355.14 329.99 355.14 333.58L269.83 333.58ZM347.38 258.79C347.38 240.21 331.75 225.14 312.48 225.14C293.21 225.14 277.58 240.21 277.58 258.79C277.58 277.37 293.21 292.45 312.48 292.45C331.75 292.45 347.38 277.37 347.38 258.79ZM335.75 258.79C335.75 271.15 325.3 281.23 312.48 281.23C299.66 281.23 289.22 271.15 289.22 258.79C289.22 246.43 299.66 236.35 312.48 236.35C325.3 236.35 335.75 246.43 335.75 258.79Z"
            strokeDasharray="0 1"
            style={{ pathLength: userImg }}
          />
        </svg>
        {/* <h1 className="text-center">Welcome</h1>
        <Link to={"/about"}>
          <h2 className="text-center">About</h2>
        </Link>
        <Link to={"/projects"}>
          <i className="fas fa-laptop-code"></i>
          <h2 className="text-center">Projects</h2>
        </Link> */}
      </motion.div>
    </motion.div>
  );
};

export default Home;
