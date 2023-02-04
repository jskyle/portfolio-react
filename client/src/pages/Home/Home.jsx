/* eslint-disable max-len */
/* eslint-disable-next-line */
import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import { About, Connect, Work } from "./components/index";
import { Landing } from "../../shared";


const StyledContainer = styled(Container)`
  position: relative;
`;


const Home = () => {

  return (
    <>
      <Landing type="home">
        <h1>Kyle Kearney</h1>
        <h6 className="sub-header rotate-1">ui engineer</h6>
      </Landing>
      <StyledContainer>
        <About />
        <Work/>
        {/* <Connect /> */}
      </StyledContainer>
    </>
  );
};

export default Home;
