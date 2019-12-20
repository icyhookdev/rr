import React, { useEffect, useState } from 'react';
import jsonPlaceHolderApi from '../api/jsonPlaceholderApi';
import Posts from '../components/Posts/Posts';

const GetPostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    jsonPlaceHolderApi.get('/posts').then(res => setPosts(res.data));
  }, []);

  return <Posts posts={posts} />;
};

export default GetPostsList;
