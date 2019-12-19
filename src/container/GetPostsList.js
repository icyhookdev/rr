import React, { useEffect, useState } from 'react';
import jsonPlaceHolderApi from '../api/jsonPlaceholderApi';

const GetPostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    jsonPlaceHolderApi.get('/posts').then(res => setPosts(res));
  }, []);
};

export default GetPostsList;
