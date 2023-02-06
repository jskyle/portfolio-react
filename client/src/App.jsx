import React from "react";
import { Container } from "reactstrap";
import { About, Connect, Work } from "./components/index";
import Landing from "./components/Landing";
import "./styles/fonts.css";

const App = () => (
  <>
    <Landing />
    <Container>
      <About />
      <Work />
      {/* <Connect /> */}
      <footer>
        <p>Dream big. Do good.</p>
      </footer>
    </Container>
  </>
);

export default App;
