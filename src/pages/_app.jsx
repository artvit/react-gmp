import React from 'react';
import { Provider } from 'react-redux';
import '../index.scss';
import Modals from '../shared/Dialog/Modals';
import { useStore } from '../store/store';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const store = useStore();
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />

      <Modals />
    </Provider>
  );
}
