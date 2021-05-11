/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const wobble = keyframes`
25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Item1 = styled.div`
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: itemone;
  background-image: url("https://images.unsplash.com/photo-1524230572899-a752b3835840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=576&h=500
  &q=2000");
  transition: transform 0.24s ease-in-out;

  &:hover {
    transform: scale(1.02);
    animation: ${wobble} 1s;
  }
`;

const WobblyTile = () => {
  const [isHovered, setHover] = useState(false);

  return (
    <Item1
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHovered && "This is a beautiful arch"}
    </Item1>
  );
};

export { WobblyTile };
