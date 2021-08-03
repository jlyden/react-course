import { render, screen } from '@testing-library/react';
import UserOutput from './UserOutput';

test('renders name if name in props', () => {
  render(<UserOutput name="foo" />);
  expect(screen.getByText(/Name/)).toBeInTheDocument();
});

test('does not render name if name not in props', () => {
  render(<UserOutput />);
  expect(screen.queryByText(/Name/)).toBeNull();
});

test('renders two paragraphs of text', () => {
  render(<UserOutput />);
  const paragraphs = screen.getAllByText(/Paragraph/);
  expect(paragraphs).toHaveLength(2);
});

test('renders footer once', () => {
  render(<UserOutput />);
  expect(screen.getAllByText(/Thank you/)).toHaveLength(1);
});