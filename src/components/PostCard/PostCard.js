import React from 'react';
import {
  PostCard,
  PostTitle,
  PostBody,
  PostLink,
  DelIcon,
  EditIcon,
  ActionButton,
} from './PostCard.style';
import formatText from '../../utils/formatText';

const Post = ({ title, body, id, deletePost, postIdx }) => (
  <PostCard>
    <PostTitle>{formatText(title, 14)}</PostTitle>
    <PostBody>{formatText(body, 150)}</PostBody>
    <PostLink to={`/posts/${id}`}>Go to post</PostLink>
    <ActionButton>
      <DelIcon onClick={() => deletePost(postIdx)} />
      <EditIcon />
    </ActionButton>
  </PostCard>
);

export default Post;
