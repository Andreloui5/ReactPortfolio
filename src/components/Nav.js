import React from "react";
import { motion } from "framer-motion";
import CloseButton from "../StyledComponents/CloseButton";
import MenuNav from "../StyledComponents/MenuNav";
import { Link } from "react-router-dom";

// Variants to define animations
const variants = {
  open: { x: 0 },
  closed: {
    x: "-100%",
    transition: {
      delay: 0.2,
    },
  },
};

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
  closed: {
    scale: 1,
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: { y: -20, opacity: 0 },
};

const links = ["home", "about", "projects"];

export const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <CloseButton onClick={() => setIsNavOpen(false)}>
        <i
          role="button"
          className="fas fa-times"
          onClick={() => setIsNavOpen(false)}
        ></i>
      </CloseButton>
      {/* Goes through links array and makes animatable menu */}
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li
            variants={liVariants}
            key={link}
            onClick={() => setIsNavOpen(false)}
          >
            <Link to={"/" + link}>{link}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
};

export default Nav;
