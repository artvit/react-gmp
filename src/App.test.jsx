import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';

jest.mock('react-modal');
jest.mock('react-redux', () => {
  // eslint-disable-next-line no-shadow
  const { Provider, useSelector } = jest.requireActual('react-redux');
  return {
    useDispatch: jest.fn(),
    useSelector,
    Provider
  };
});

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

describe('App component', () => {
  test('renders ', () => {
    const { baseElement } = render(<App />, { wrapper: Wrapper });
    expect(baseElement).toBeInTheDocument();
  });
});
