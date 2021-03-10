import React, { useState } from "react"
import './App.sass';
import { Navigation } from "./shared";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home/Home"
import CaseStudy from "./pages/CaseStudy/CaseStudy"
import Blog from "./pages/Blog/Blog"
import BlogPost from "./pages/Blog/BlogPost/BlogPost"
import Login from "./pages/Login/Login"
import PostEditor from "./pages/Admin/PostEditor/PostEditor";
import { Container } from "reactstrap"

const App = () => {
  const [navType, setNavType] = useState(false);

  return (
    <Router>
      <div>
        <Navigation type={navType} />
      </div>
      <Container>
        <Switch>
          <Route path="/case-study/:id"><CaseStudy setHomeNav={setNavType} /></Route>
          <Route path="/my-blog"><Blog setHomeNav={setNavType} /></Route>
          <Route path="/blog-post/:id"><BlogPost /></Route>
          <Route path="/create-post/"><PostEditor /></Route>
          <Route path="/user-login"><Login /></Route>
          <Route path="/admin-page"></Route>
          <Route path="/"><Home setHomeNav={setNavType} /></Route>
        </Switch>
      </Container>
      <footer>
      </footer>
    </Router>
  );
}

export default App;
