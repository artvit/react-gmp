import { render } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const Errored = () => {
  throw new Error('Test Error');
};

const Ok = () => (
  <div>ok</div>
);

describe('ErrorBoundary', () => {
  test('should be shown on error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Errored />
      </ErrorBoundary>,
    );
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });

  test('should not be shown without error', () => {
    const { getByText, queryByText } = render(
      <ErrorBoundary>
        <Ok />
      </ErrorBoundary>,
    );
    expect(getByText('ok')).toBeInTheDocument();
    expect(queryByText('Something went wrong')).not.toBeInTheDocument();
  });
});
