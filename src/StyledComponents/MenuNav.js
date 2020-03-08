import styled from "styled-components";
import { motion } from "framer-motion";

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 25vw;
  height: 100vh;
  background: var(--onyx);
  padding: 40px;
  z-index: 100;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--purple) solid;
      }
    }
  }
  /* button {
    background: transparent;
    font-size: 2rem;
    border: none;
  } */
`;

export default MenuNav;
