import React from 'react';
import './App.css';
import Person from './Person/Person';
import { sortByNameAsc, sortByNameDesc } from './utils/sort.js';

const App = () => {
  const startingPersons = [
    { id: 10001, name: "Graham", sgyAge: 8 },
    { id: 10002, name: "Bernadette", sgyAge: 4 },
    { id: 10003, name: "Eric", sgyAge: 1.5 },
    { id: 10004, name: "Jaskaran", sgyAge: 1 },
    { id: 10005, name: "Hernan", sgyAge: 0 },
  ];

  const [sortAsc, setSort] = React.useState(true);
  const toggleSort = () => setSort(!sortAsc);
  let sorter = sortAsc ? sortByNameAsc : sortByNameDesc;

  const [visible, setVisibility] = React.useState(true);
  const toggleVisibility = () => setVisibility(!visible);
  const buttonVisibilityTitle = visible ? 'Hide Persons' : 'Show Persons';

  const [persons, setPersons] = React.useState(startingPersons);
  const deletePersonHandler = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  }

  const changeNameHandler = (event, id) => {
    // Get the person we need to update
    const index = persons.findIndex(p => p.id === id);
    const person = { ...persons[index] };

    // Update with event value
    person.name = event.target.value;

    // Create new state with update
    const newPersons = [...persons];
    newPersons[index] = person;
    setPersons(newPersons);
  }

  // Only to demonstrate inline style
  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    margin: '10px',
    cursor: 'pointer'
  }

  const renderPersons = () =>  {
    return (
      <ul className='name-list'>
        {persons.sort(sorter).map(({ id, name, sgyAge }, index) =>
          <li key={id}>
            <Person
              name={name}
              sgyAge={sgyAge}
              onClick={() => deletePersonHandler(index)}
              onChange={(event) => changeNameHandler(event, id)}
            />
          </li>
        )}
      </ul>
    )

  }

  return (
    <div className="App">
      <header>
        <h1>Name Sorter</h1>
      </header>
      <div className="container">
        <button
          style={buttonStyle}
          onClick={toggleSort}
        >
          Sort Names
        </button>
        <button
          style={buttonStyle}
          onClick={toggleVisibility}
        >
          {buttonVisibilityTitle}
        </button>
      </div>
      {visible && renderPersons()}
    </div>
  );
}

export default App;