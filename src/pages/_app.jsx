import dynamic from 'next/dynamic';
import React from 'react';
import '../index.scss';
import { wrapper } from '../store/store';

const DynamicModals = dynamic(() => import('../components/dialog/Modals'), { ssr: false });

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />

    <DynamicModals />
  </>
);

export default wrapper.withRedux(App);
