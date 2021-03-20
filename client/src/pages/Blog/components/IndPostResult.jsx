/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useEffect } from 'react';
import './styles/IndPostResult.sass';
import { Link } from 'react-router-dom';

const IndPostResult = ({ post }) => {
  const { publishDate, title, summary, id, slug} = post;
  const link = `/blog-post/${id}/${slug}`

  console.log(post);

  return (
    <div>
      <h6 className="post-result-date">March 1st, 2021</h6>
      <Link to={link}><h3 className="post-result-title">{title}</h3></Link>
      <p className="post-result-brief">
        {summary}
        <Link className="left" to={link}>read more.</Link>
      </p>

    </div>
  );
}; 

export default IndPostResult;
