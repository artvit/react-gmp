import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import useClickOutside from './use-click-outside.effect';

describe('useClickOutside', () => {
  let handler;
  let Clickable;

  beforeEach(() => {
    handler = jest.fn();
    Clickable = () => {
      const ref = useClickOutside(handler);
      return (
        <div ref={ref}>b</div>
      );
    };
  });

  test('should call handler on click outside', () => {
    const { getByText } = render(
      <>
        <Clickable />
        <div>a</div>
      </>
    );
    fireEvent.mouseDown(getByText('a'));
    expect(handler).toHaveBeenCalled();
  });
});
