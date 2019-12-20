import styled from 'styled-components';
import { Link } from '@reach/router';

export const PostCard = styled.div`
  width: 300px;
  height: 230px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const PostTitle = styled.h2`
  text-align: center;
  letter-spacing: 2px;
  color: #333;
  text-transform: uppercase;
  padding: 1rem;
  font-size: 2rem;
`;

export const PostBody = styled.p`
  text-align: justify;
  color: #747474;
  font-size: 1.7rem;
  padding: 1rem;
`;

export const PostLink = styled(Link)`
  background: #0dcbf1;
  color: #fff;
  width: fit-content;
  padding: 1rem;
  font-size: 1.3rem;
  margin: 1rem;
  border-radius: 5px;
  position: relative;
  top: 30px;
  left: 200px;
  box-shadow: 0 0 10px rgb(13, 203, 241);
`;
