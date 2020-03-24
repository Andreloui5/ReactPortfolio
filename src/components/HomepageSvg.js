import React from "react";
import { motion } from "framer-motion";

const HomepageSvg = props => {
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
      {/* Computer */}
      <motion.path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap={props.compLinecap}
        strokeWidth="8"
        stroke={props.color}
        d="M255.06 241.79L375.06 241.79L375.06 265.64L255.06 265.64L255.06 241.79ZM255.06 265.64L255.06 337.18L375.06 337.18L375.06 265.64 M327.06 285.51L341.06 301.41L327.06 317.31M303.06 285.51L289.06 301.41L303.06 317.31 M267.06 251.73C265.95 251.73 265.06 252.62 265.06 253.71C265.06 254.81 265.95 255.7 267.06 255.7C268.16 255.7 269.06 254.81 269.06 253.71C269.06 252.62 268.16 251.73 267.06 251.73Z M281.06 251.73C279.95 251.73 279.06 252.62 279.06 253.71C279.06 254.81 279.95 255.7 281.06 255.7C282.16 255.7 283.06 254.81 283.06 253.71C283.06 252.62 282.16 251.73 281.06 251.73Z M295.06 251.73C293.95 251.73 293.06 252.62 293.06 253.71C293.06 254.81 293.95 255.7 295.06 255.7C296.16 255.7 297.06 254.81 297.06 253.71C297.06 252.62 296.16 251.73 295.06 251.73Z"
        strokeDasharray="0 1"
        style={{ pathLength: props.computerImg, opacity: props.projectShow }}
      />
      {/* User img */}
      <motion.path
        fill="none"
        strokeLinejoin="round"
        strokeLinecap={props.userLinecap}
        strokeWidth="8"
        stroke={props.color}
        d="M318.48 299.92C307.07 299.92 303.75 296.18 296.77 296.18C278.78 296.18 264.19 310.25 264.19 327.6C264.19 328.19 264.19 332.98 264.19 333.58C264.19 339.77 269.4 344.8 275.83 344.8C284.36 344.8 352.61 344.8 361.14 344.8C367.56 344.8 372.77 339.77 372.77 333.58C372.77 332.98 372.77 328.19 372.77 327.6C372.77 310.25 358.18 296.18 340.2 296.18C333.24 296.18 329.9 299.92 318.48 299.92ZM275.83 333.58C275.83 329.99 275.83 327.99 275.83 327.6C275.83 316.47 285.23 307.4 296.77 307.4C300.31 307.4 306.05 311.14 318.48 311.14C331.01 311.14 336.64 307.4 340.2 307.4C351.74 307.4 361.14 316.47 361.14 327.6C361.14 327.99 361.14 329.99 361.14 333.58L275.83 333.58ZM353.38 258.79C353.38 240.21 337.75 225.14 318.48 225.14C299.21 225.14 283.58 240.21 283.58 258.79C283.58 277.37 299.21 292.45 318.48 292.45C337.75 292.45 353.38 277.37 353.38 258.79ZM341.75 258.79C341.75 271.15 331.3 281.23 318.48 281.23C305.66 281.23 295.22 271.15 295.22 258.79C295.22 246.43 305.66 236.35 318.48 236.35C331.3 236.35 341.75 246.43 341.75 258.79Z"
        strokeDasharray="0 1"
        style={{ pathLength: props.userImg, opacity: props.aboutShow }}
      />
    </svg>
  );
};

export default HomepageSvg;
