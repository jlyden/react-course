import { render, screen } from '@testing-library/react';
import UserInput from './UserInput';

test('renders name input', () => {
  render(<UserInput />);
  expect(screen.getByRole('textbox', { name: /Name/ })).toBeInTheDocument();
});
