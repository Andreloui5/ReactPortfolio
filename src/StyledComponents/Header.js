import styled from "styled-components";

const Header = styled.header`
  background: transparent;
  color: var(--onyx);
  padding: 20px;
  display: flex;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    margin-left: 15px;
    font-family: "Space Mono", monospace;
    font-size: 1rem;
  }
`;

export default Header;
