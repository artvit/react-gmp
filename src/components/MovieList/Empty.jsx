import React from 'react';
import styled from 'styled-components';

const NoDataTitleBox = styled.div`
  padding: 70px 0;
  width: 100%;
  text-align: center;
  font-size: 28px;
`;

const Empty = () => (
  <NoDataTitleBox>
    No Movies Found
  </NoDataTitleBox>
);

export default Empty;
