import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BlogPost.sass';
import { useParams } from 'react-router-dom';

// components
import { Landing, RenderDraft, PageMotionWrapper, LoadingWrapper } from '../../../shared';

// redux
import { getPost } from "../../../store/blog/selectors";
import { fetchSinglePost } from "../../../store/blog/thunks";

const BlogPost = () => {
  const { id } = useParams();
  const [ isLoading, setLoading ] = useState(true); 
  const dispatch = useDispatch();
  const post = useSelector((state) => getPost(state, parseInt(id)));

  useEffect(() => {
    if (!post) {
      dispatch(fetchSinglePost(parseInt(id))).then(() => {
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });  
    }
  }, [post])

  const raw = isLoading ? false : JSON.parse(post.content);

 return ( 
   <LoadingWrapper loading={isLoading}>
    <PageMotionWrapper>
      <Landing secondary>
        <h5>post:</h5>
        <h2>{isLoading ? "" : post.title}</h2>
      </Landing>
      <div>
        <RenderDraft raw={raw}/>
      </div>
    </PageMotionWrapper>
   </LoadingWrapper>
)};

export default BlogPost;
