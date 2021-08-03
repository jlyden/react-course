import { render, screen } from '@testing-library/react';
import UserExport from './UserExport';

test('renders two paragraphs of text', () => {
  render(<UserExport />);
  const paragraphs = screen.getAllByText(/Paragraph/);
  expect(paragraphs).toHaveLength(2);
});

test('renders username if username in props', () => {
  render(<UserExport username="foo" />);
  expect(screen.getByText(/Username/)).toBeInTheDocument();
});

test('does not render username if username not in props', () => {
  render(<UserExport />);
  expect(screen.queryByText(/Username/)).toBeNull();
});

test('renders footer', () => {
  render(<UserExport />);
  expect(screen.getByText(/Thank you/)).toBeInTheDocument();
});