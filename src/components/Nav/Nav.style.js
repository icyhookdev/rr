import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  height: 100%;
  width: fit-content;
  color: #1e4a6e;
  font-size: 1.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 1rem 0;
`;

export const NavItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  font-size: 1.4rem;
`;
