/* eslint-disable-next-line */
import React from 'react';
import { TextSection } from '../../../shared';
import IndPostResult from './IndPostResult';

const PostResults = ({ posts }) => {
  return (
  <TextSection title="posts:">
    { posts.map((post, idx) => <IndPostResult post={post} key={idx}/>)}
  </TextSection>
)};

export default PostResults;
