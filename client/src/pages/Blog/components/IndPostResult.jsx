/* eslint-disable max-len */
/* eslint-disable-next-line */
import React from 'react';
import './styles/IndPostResult.sass';
import { Link } from 'react-router-dom';

const IndPostResult = () => (
  <div>
    <h6 className="post-result-date">March 1st, 2021</h6>
    <Link to="/"><h3 className="post-result-title">All 52 books I read in 2021 ranked.</h3></Link>
    <p className="post-result-brief">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…
      <Link className="left" to="/">read more.</Link>
    </p>

  </div>
);

export default IndPostResult;
