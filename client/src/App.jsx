import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import { About, Connect, Work } from "./pages/Home/components/index";
import Landing from "./shared/Landing";





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
