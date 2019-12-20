import styled from 'styled-components';

export const StyledPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-gap: 2rem;
`;

export const PostTitle = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-size: 2.4rem;
  color: #333;
  margin-top: 1rem;
  padding: 1rem;
`;

export const PostBody = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  width: 70%;
  margin: 0 auto;
  text-align: justify;
  color: #747474;
  padding: 1rem;
  margin-top: 2rem;
`;

export const PostComment = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

export const PostCommentAuthor = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #777;
  text-transform: capitalize;
`;
export const PostCommentEmail = styled.div`
  font-size: 1.4rem;
  text-transform: capitalize;
  font-weight: bold;
  color: #b4b4b4;
`;

export const PostCommentBody = styled.div`
  font-size: 1.3rem;
  color: #b4b4b4;
  text-transform: capitalize;
`;

export const PostLabel = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
`;
