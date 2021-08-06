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
});

test('shows Person list when Show Button is clicked', () => {
  // arrange
  render(<App />);

  // act
  fireEvent.click(screen.getByText('Hide Persons'));
  fireEvent.click(screen.getByText('Show Persons'));
  screen.findByRole('heading');

  // assert
  expect(screen.queryAllByRole('listitem')).toHaveLength(5);
});

test('updates name and resorts when input value is changed', () => {
    // arrange
    const originalName = 'Bernadette';
    const testName = 'Joey';
    render(<App />);

    // act
    fireEvent.change(screen.getByDisplayValue(originalName), { target: { value: testName } });
  
    // assert
    // New name is there
    expect(screen.getByDisplayValue(testName)).toBeInTheDocument();
    expect(screen.getByText(testName, {exact: false})).toBeInTheDocument();
    // Old name is gone
    expect(screen.queryByDisplayValue(originalName)).toBeNull();
    expect(screen.queryByText(originalName, {exact: false})).toBeNull();
    // Names are resorted, and there are still 5 name cards
    let allListItems = screen.getAllByRole('listitem');
    expect(allListItems[0]).toHaveTextContent(screen.getByText(/Eric/).textContent);
    expect(allListItems).toHaveLength(5);
});

test('removes user card when the text is clicked', () => {
    // arrange
    const nameCardToDelete = 'Graham';
    render(<App />);

    // act
    fireEvent.click(screen.getByText(nameCardToDelete, {exact: false}));

    // assert
    // Name is gone, and there are only 4 cards
    expect(screen.queryByDisplayValue(nameCardToDelete)).toBeNull();
    expect(screen.queryByText(nameCardToDelete, {exact: false})).toBeNull();
    expect(screen.queryAllByRole('listitem')).toHaveLength(4);
});