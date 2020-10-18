import { render } from '@testing-library/react';
import React from 'react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('render component', () => {
    const { getByText } = render(<NotFound onGoToHomeClick={jest.fn()} />);
    const element = getByText(/404/);
    expect(element).toBeInTheDocument();
  });
});
