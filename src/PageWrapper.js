/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.main`
  margin: 24px;
  padding: 24px;
  border: 4px solid black;
  height: calc(100vh - 104px);
`;

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

const Logo = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  display: block;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  width: 280px;
  height: 40px;
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  ul li {
    display: inline-block;
  }

  ul li a {
    color: black;
    text-decoration: none;
  }

  ul li a:hover {
    text-decoration: underline;
  }
`;

const PageWrapper = ({ children }) => (
  <Main>
    <HeaderWrapper>
      <Logo>React 21</Logo>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/aboutme">About me</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderWrapper>
    {children}
  </Main>
);

export { PageWrapper };
