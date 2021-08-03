import { render, screen } from '@testing-library/react';
import UserInput from './UserInput';

test('renders username input', () => {
  render(<UserInput />);
  expect(screen.getByRole('textbox', { name: /Username/ })).toBeInTheDocument();
});