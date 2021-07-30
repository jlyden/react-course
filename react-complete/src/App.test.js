import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(/Sorter/);
});

test('re-sorts Person list desc when sort button clicked once', () => {
  // arrange
  render(<App />);

  // act
  fireEvent.click(screen.getByText('Sort Names'));
  screen.findByRole('heading');

  // assert
  let allListItems = screen.getAllByRole('listitem');
  expect(allListItems[0]).toHaveTextContent(screen.getByText(/Jaskaran/).textContent);
});

test('re-sorts Person list asc when sort button clicked twice', () => {
  // arrange
  render(<App />);

  // act
  fireEvent.click(screen.getByText('Sort Names'));
  fireEvent.click(screen.getByText('Sort Names'));
  screen.findByRole('heading');

  // assert
  let allListItems = screen.getAllByRole('listitem');
  expect(allListItems[0]).toHaveTextContent(screen.getByText(/Bernadette/).textContent);
});