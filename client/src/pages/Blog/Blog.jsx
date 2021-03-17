/* eslint-disable max-len */
/* eslint-disable-next-line */
import React from 'react';
import './Blog.sass';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Landing } from '../../shared';
import PostResults from './components/PostResults';

const Blog = ({ setHomeNav }) => {
  setHomeNav(false);
  return (
    <>
      <Landing type="blog-home">
        <h5>featued post:</h5>
        <Link to="/blog-post/1"><h1 className="featured-post-title">Life Lessons I Learned Through Coding.</h1></Link>
        <p className="featured-post-brief">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum…
          <Link className="left" to="/">read more.</Link>
        </p>
      </Landing>
      <PostResults />
    </>
  );
};

Blog.propTypes = {
  setHomeNav: PropTypes.func.isRequired,
};

export default Blog;
