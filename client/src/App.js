/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { Footer, Navigation, Loading } from './shared';
import Home from './pages/Home/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost/BlogPost';
import Login from './pages/Login/Login';
import PostEditor from './pages/Admin/PostEditor/PostEditor';

const App = () => {
  const [navType, setNavType] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              <Route path="/admin-page" />
              <Route path="/"><Home setHomeNav={setNavType} /></Route>
            </Switch>
          </Container>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
