import React, { useEffect, useState } from 'react';
import jsonPlaceholderApi from '../api/jsonPlaceholderApi';
import Post from '../components/Post/Post';

const GetPost = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState({});
  const [comments, setComments] = useState(null);
  useEffect(() => {
    jsonPlaceholderApi.get(`/posts/${postId}`).then(res => setPost(res.data));
    jsonPlaceholderApi
      .get(`/comments?postId=${postId}`)
      .then(res => setComments(res.data));
  }, [postId]);

  useEffect(() => {
    if (post) {
      jsonPlaceholderApi
        .get(`/users/${post.userId}`)
        .then(res => setAuthor(res.data));
    }
  }, [post]);

  return <Post comments={comments} post={post} user={author} />;
};
export default GetPost;
