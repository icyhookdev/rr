import React from 'react';
import { Link } from '@reach/router';
import { StyledNav, Logo, NavItems, NavItem } from './Nav.style';

const Nav = () => (
  <StyledNav>
    <Logo to="/">Simetrik test</Logo>
    <NavItems>
      <NavItem>
        <Link to="/posts">Posts</Link>
      </NavItem>
      <NavItem>
        <Link to="/create">create</Link>
      </NavItem>
    </NavItems>
  </StyledNav>
);

export default Nav;
