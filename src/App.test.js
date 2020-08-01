import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  test('renders ', () => {
    const { getAllByText } = render(<App />);
    const helloElements = getAllByText(/hello/i);
    expect(helloElements.length).toBe(5);
  });
});
