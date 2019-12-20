import React, { useEffect, useState } from 'react';
import jsonPlaceHolderApi from '../api/jsonPlaceholderApi';
import Posts from '../components/Posts/Posts';

const GetPostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    jsonPlaceHolderApi.get('/posts').then(res => {
      const createdPosts = JSON.parse(localStorage.getItem('posts'));

      if (createdPosts) {
        const fetchedPosts = [...createdPosts, ...res.data];
        return setPosts(fetchedPosts);
      }

      setPosts(res.data);
    });
  }, []);

  return <Posts posts={posts} setPosts={setPosts} />;
};

export default GetPostsList;
