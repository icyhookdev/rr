import styled from 'styled-components';

const StyledPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  grid-gap: 2rem;
  justify-content: space-around;
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 300px);
  }
`;

export default StyledPosts;
