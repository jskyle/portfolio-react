import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BlogPost.sass';
import { useParams } from 'react-router-dom';
import { Landing, RenderDraft } from '../../../shared';
import { renderers } from './utils';

// redux
import { getPost } from "../../../store/blog/selectors";
import { fetchSinglePost } from "../../../store/blog/thunks";

const BlogPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPost(state, parseInt(id)));
  
  useEffect(() => {
    if (!post) {
      dispatch(fetchSinglePost(parseInt(id)));
    }
  }, [])

  console.log(post, id);

  const raw = JSON.parse(post.content, renderers);

 return ( 
  <>
    <Landing>
      <h5>post:</h5>
      <h1 className="post-title">{post.title}</h1>
    </Landing>
    <div>
      <RenderDraft raw={raw}/>
    </div>
  </>
)};

export default BlogPost;
