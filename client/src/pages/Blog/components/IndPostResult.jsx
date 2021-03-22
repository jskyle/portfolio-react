/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useEffect } from 'react';
import './styles/IndPostResult.sass';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils';

const IndPostResult = ({ post }) => {
  const { publishDate, title, summary, id, slug} = post;
  const link = `/blog-post/${id}/${slug}`
  
  const formattedDate = formatDate(publishDate);

  return (
    <div>
      <h6 className="post-result-date">{formattedDate}</h6>
      <Link to={link}><h3 className="post-result-title"> <span className="left">{title}</span></h3></Link>
      <p className="post-result-brief">
        {summary}
        <Link className="left" to={link}>read more.</Link>
      </p>

    </div>
  );
}; 

export default IndPostResult;
