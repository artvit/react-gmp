import '../index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store/store';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  const store = useStore();
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}
