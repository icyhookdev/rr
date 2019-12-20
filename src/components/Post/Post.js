import React from 'react';
import {
  PostTitle,
  PostBody,
  StyledPost,
  PostCommentEmail,
  PostCommentAuthor,
  PostComment,
  PostCommentBody,
  PostLabel,
} from './Post.style';

const Post = ({ user, post, comments }) => (
  <StyledPost>
    <div>
      {post && (
        <>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </>
      )}

      {comments && (
        <>
          <PostLabel>Comments</PostLabel>
          {comments.map(comment => (
            <PostComment key={comment.id}>
              <PostCommentAuthor>{comment.name}</PostCommentAuthor>
              <PostCommentEmail>{comment.email}</PostCommentEmail>
              <PostCommentBody>{comment.body}</PostCommentBody>
            </PostComment>
          ))}
        </>
      )}
    </div>

    <div>
      {user && (
        <>
          <h3>{user.name}</h3>
          <label>@{user.username}</label>
          <div>{user.email}</div>
          <div>
            {`${user.address && user.address.city}, ${user.address &&
              user.address.street}`}
          </div>
          <div>{user.phone}</div>
          <div>{user.website}</div>
          <div>{user.company && user.company.name}</div>
        </>
      )}
    </div>
  </StyledPost>
);

export default Post;
