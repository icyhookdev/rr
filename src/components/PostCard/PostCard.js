import React from 'react';
import { PostCard, PostTitle, PostBody, PostLink } from './PostCard.style';
import formatText from '../../utils/formatText';

const Post = ({ title, body, userId }) => (
  <PostCard>
    <PostTitle>{formatText(title, 14)}</PostTitle>
    <PostBody>{formatText(body, 150)}</PostBody>
    <PostLink to={`/posts/${userId}`}>Go to post</PostLink>
  </PostCard>
);

export default Post;
