import React from 'react';
import { Router } from '@reach/router';
import Nav from './components/Nav/Nav';
import PostList from './pages/PostsList';

const App = () => (
  <>
    <Nav />
    <Router>
      <PostList path="/posts" />
    </Router>
  </>
);

export default App;
