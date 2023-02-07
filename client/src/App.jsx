import React from "react";
import { Container } from "reactstrap";

import { About, Landing, Work } from "./components";

const App = () => (
  <>
    <Landing />
    <Container>
      <About />
      <Work />
      <footer>
        <p>Dream big. Do good.</p>
      </footer>
    </Container>
  </>
);

export default App;
