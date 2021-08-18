import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux"
import { AnimatePresence } from "framer-motion"
import "./App.sass";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "reactstrap";

// pages
import {Home, CaseStudy, Skill} from "./pages"

// utils
import { ScrollToTop } from "./utils";
import { overlay } from "./store/ui/selectors"

const StyledContainer = styled(Container)`
  position: relative;
  ${(props) => (props.overlay ? `
    margin-left: initial;
    margin-right: initial;
    padding: 0;
    margin: 0;
  `: null)}
`;


const App = () => {
  const overlay_ = useSelector(overlay()) ? "true" : "";

  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* <Navigation overlay={overlay_}/> */}
      </div>
      <StyledContainer overlay={overlay_}>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/case-study/:slug" component={CaseStudy} />
            <Route path="/skill/:type" component={Skill}/>
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </StyledContainer>
    </Router>
  );
};

export default App;
