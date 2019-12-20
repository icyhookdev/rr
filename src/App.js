import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav/Nav';
import PostList from './pages/PostsList';
import PostDetails from './pages/PostDetails';
import CreatePosts from './pages/CreatePosts';

const App = () => (
  <>
    <Nav />
    <Router>
      <PostList path="/posts" />
      <CreatePosts path="/create" />
      <PostDetails path="/posts/:postId" />
    </Router>
  </>
);

export default App;
