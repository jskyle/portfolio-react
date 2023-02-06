import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import { About, Connect, Work } from "./components/index";
import Landing from "./components/Landing";

const App = () => (
  <>
    <Landing />
    <Container>
      <About />
      <Work />
      {/* <Connect /> */}
    </Container>
  </>
);

export default App;
