import styled from "styled-components";

const Tile = styled.div`
  border: 1px solid black;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({ gridarea }) => gridarea};

  a {
    color: white;
    text-decoration: none;
  }

  background-image: ${({ bgimage }) => `url(${bgimage})`};
`;

export { Tile };
