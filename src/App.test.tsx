import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";

test('should to App exist h1 to have Hello', () => {
  const { container } = render(<App />);

  const header = container.querySelector('h1')

  expect(header).toHaveTextContent(/(Hello .*)/i);
});