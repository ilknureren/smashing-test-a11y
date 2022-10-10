import { render, screen } from '@testing-library/react';
import App from './App';
import {axe } from 'jest-axe'


// Thanks to adding setUpTests
// toHaveNoViolations
// expect.extend(toHaveNoViolations)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



it('should have no a11y violations', async () => {
  const  { container } = render(<App />);

  expect(await axe(container)).toHaveNoViolations()
})