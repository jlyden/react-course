import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders heading and Persons', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent(/Sorter/);
  expect(screen.queryAllByRole('listitem')).toHaveLength(5);
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

test('hides Person list when Hide Button is clicked', () => {
  // arrange
  render(<App />);

  // act
  fireEvent.click(screen.getByText('Hide Persons'));
  screen.findByRole('heading');

  // assert
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
})

test('shows Person list when Show Button is clicked', () => {
  // arrange
  render(<App />);

  // act
  fireEvent.click(screen.getByText('Hide Persons'));
  fireEvent.click(screen.getByText('Show Persons'));
  screen.findByRole('heading');

  // assert
  expect(screen.queryAllByRole('listitem')).toHaveLength(5);
})