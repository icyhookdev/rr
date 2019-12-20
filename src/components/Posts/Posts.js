import React from 'react';
import PostCard from '../PostCard/PostCard';
import StyledPosts from './Posts.style';

const Posts = ({ posts }) => {
  console.log(posts);
  const renderPosts = () => {
    if (posts) {
      return posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
        />
      ));
    }

    return <p>loading</p>;
  };
  return <StyledPosts>{renderPosts()}</StyledPosts>;
};

export default Posts;
