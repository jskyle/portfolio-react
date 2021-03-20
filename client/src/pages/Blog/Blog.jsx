/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Blog.sass';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Landing } from '../../shared';
import PostResults from './components/PostResults';

// redux
import { fetchPosts } from '../../store/blog/thunks';
import { getPosts } from '../../store/blog/selectors';

const Blog = ({ setHomeNav }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => getPosts(state));
  const [isLoading, setIsloading ] = useState(true);

  useEffect(() => {
      setIsloading(true);
      dispatch(fetchPosts('all')).then(() => {
        setIsloading(false)
      });
  }, [])

  const featuredPost = posts.find((e) => e.featured === true) || posts[0];
  const link = isLoading ? "/" : `/blog-post/${featuredPost.id}/${featuredPost.slug}`



  setHomeNav(false);
  return (
    <>
      {isLoading ? (<h5>Loading</h5>) : (
      <>
        <Landing type="blog-home">
          <h5>featured post:</h5>
          <Link to={link}><h1 className="featured-post-title">{featuredPost.title}</h1></Link>
          <p className="featured-post-brief">
            {featuredPost.summary}
            <Link className="left" to={link}>read more.</Link>
          </p>
        </Landing>
        <PostResults posts={posts} />
      </>
      )}
    </>
  );
};

Blog.propTypes = {
  setHomeNav: PropTypes.func.isRequired,
};

export default Blog;
