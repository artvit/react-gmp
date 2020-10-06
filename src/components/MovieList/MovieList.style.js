import styled from 'styled-components';

export const MoviesBox = styled.div`
  margin: 10px 70px;
`;

export const MoviesLayout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 50px 50px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const CountBox = styled.div`
  margin-top: 20px;
`;
