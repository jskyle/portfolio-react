import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion"
import "./App.sass";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "reactstrap";

// pages
import {Home, Login, Blog, BlogPost, PostEditor, CaseStudy, Skill} from "./pages"

// components
import { Navigation } from "./shared";

// utils
import { PrivateRoute, ScrollToTop } from "./utils";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navigation />
      </div>
      <Container style={{position: "relative"}}>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/case-study/:id" component={CaseStudy} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-post/:id/:slug" component={BlogPost} />
            <PrivateRoute path="/create-post/" component={PostEditor} />
            <Route path="/user-login" component={Login} />
            <Route path="/portfolio" component={Home} />
            <Route path="/skill/:type" component={Skill}/>
            <Route exact path="/">
              <Redirect to="/portfolio" />
            </Route>
          </Switch>
        </AnimatePresence>
      </Container>
    </Router>
  );
};

export default App;
