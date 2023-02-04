import React from "react";
import styled from "styled-components";
import "./App.css";
import { Container } from "reactstrap";

// pages
import {Home} from "./pages"

const StyledContainer = styled(Container)`
  position: relative;
`;


const App = () => {

  return (
      <StyledContainer>
            <Home/>
      </StyledContainer>
  );
};

export default App;
