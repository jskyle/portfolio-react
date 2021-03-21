/* eslint-disable max-len */
/* eslint-disable-next-line */
import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Blog.sass';
import { Link } from 'react-router-dom';
import { Landing, PageMotionWrapper, LoadingWrapper } from '../../shared';
import PostResults from './components/PostResults';

// redux
import { fetchPosts } from '../../store/blog/thunks';
import { getPosts } from '../../store/blog/selectors';

const Blog = () => {
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


  return (
    <LoadingWrapper loading={isLoading}>
      <PageMotionWrapper>
          
          <Landing secondary>
            <h5>featured post:</h5>
            <Link to={link}><h2>{isLoading ? "" : featuredPost.title}</h2></Link>
            <p className="featured-post-brief">
              {isLoading ? "" : featuredPost.summary}
              <Link className="left" to={link}>read more.</Link>
            </p>
          </Landing>
          <PostResults posts={posts} />
      </PageMotionWrapper>
    </LoadingWrapper>
  );
};


export default Blog;
