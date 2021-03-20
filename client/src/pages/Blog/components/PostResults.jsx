/* eslint-disable-next-line */
import React from 'react';
import { TextSection } from '../../../shared';
import IndPostResult from './IndPostResult';

const PostResults = ({ posts }) => {
  console.log(posts);
  return (
  <TextSection title="posts:">
    { posts.map((post) => <IndPostResult post={post}/>)}
  </TextSection>
)};

export default PostResults;
