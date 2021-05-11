import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  height: calc(100% - 100px);
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "itemone  itemtwo itemtwo  "
    "itemthree  itemthree  itemthree";

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "itemone itemone "
      "itemtwo  itemtwo  "
      "itemthree  itemthree  ";
  }
`;

export { Grid };
