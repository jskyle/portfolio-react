import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion"
import "./App.sass";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { Container } from "reactstrap";

// pages
import Home from "./pages/Home/Home";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/BlogPost/BlogPost";
import Login from "./pages/Login/Login";
import PostEditor from './pages/Admin/PostEditor/PostEditor';

// components
import { Footer, Navigation } from "./shared";

// utils
import { PrivateRoute, ScrollToTop } from "./utils";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navigation />
      </div>
      <Container>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/case-study/:id" component={CaseStudy} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-post/:id/:slug" component={BlogPost} />
            <PrivateRoute path="/create-post/" component={PostEditor} />
            <Route path="/user-login" component={Login} />
            <Route path="/portfolio" component={Home} />
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
