import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders expected header', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(/Assignment/);
});

test('renders expected default name (UserInput)', () => {
  render(<App />);
  expect(screen.getByDisplayValue('Bob')).toBeInTheDocument();
});

test('renders four paragraphs of text (UserOutput x2)', () => {
  render(<App />);
  const paragraphs = screen.getAllByText(/Paragraph/);
  expect(paragraphs).toHaveLength(4);
});

test('change in name updates input and display', () => {
  const testName = 'Joey';
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Name/), { target: { value: testName } });
  expect(screen.getByDisplayValue(testName)).toBeInTheDocument();
  expect(screen.getByText(testName, {exact: false})).toBeInTheDocument();
});