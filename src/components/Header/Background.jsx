import React from 'react';
import { BackgroundImg, Blur } from './Background.style';

const Background = ({ children }) => (
  <BackgroundImg>
    <Blur>
      {children}
    </Blur>
  </BackgroundImg>
);

export default Background;
