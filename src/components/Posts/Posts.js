import React from 'react';
import PostCard from '../PostCard/PostCard';
import StyledPosts from './Posts.style';

const Posts = ({ posts, setPosts }) => {
  const onDeletePostHandler = postIdx => {
    const currentPosts = [...posts];
    currentPosts.splice(postIdx, 1);
    setPosts(currentPosts);
  };

  const renderPosts = () => {
    if (posts) {
      return posts.map((post, i) => (
        <PostCard
          deletePost={onDeletePostHandler}
          key={post.id}
          postIdx={i}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ));
    }

    return <p>loading</p>;
  };
  return <StyledPosts>{renderPosts()}</StyledPosts>;
};

export default Posts;
