import React from 'react';
import '../index.scss';
import Modals from '../shared/Dialog/Modals';
import { wrapper } from '../store/store';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />

    <Modals />
  </>
);

export default wrapper.withRedux(App);
