import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome message', () => {
  render(<App />);
  const textElement = screen.getByText(/Financing/i);
  expect(textElement).toBeInTheDocument();
});
