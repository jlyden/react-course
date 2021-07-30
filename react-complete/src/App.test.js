import { render, screen } from '@testing-library/react';
import App from './App';

test('renders headingqw', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Hola');
});
