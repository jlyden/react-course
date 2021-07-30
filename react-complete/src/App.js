import React from 'react';
import './App.css';
import Person from './Person/Person';
import { sortByNameAsc, sortByNameDesc } from './utils/sort.js';

const App = () => {
  const persons = [
    { name: "Eric", sgyAge: 1.5 },
    { name: "Graham", sgyAge: 8 },
    { name: "Bernadette", sgyAge: 4 },
    { name: "Jaskaran", sgyAge: 1 },
    { name: "Hernan", sgyAge: 0 },
  ];

  const [sortAsc, setSort] = React.useState(true);
  const toggleSort = () => setSort(!sortAsc);
  let sorter = sortAsc ? sortByNameAsc : sortByNameDesc;

  const [isGrey, setListItemClass] = React.useState(true);
  const toggleListItemClass = () => setListItemClass(!isGrey);
  let listItemClass = isGrey ? "grey" : "blue";

  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1>Name Sorter</h1>
      <div className="container">
        <button
          style={buttonStyle}
          onClick={toggleSort}
        >
          Sort Names
        </button>
      </div>
      <ul>
        {persons.sort(sorter).map(({ name, sgyAge }) =>
          <li key={name+sgyAge} className={listItemClass}>
            <Person
              name={name}
              sgyAge={sgyAge}
              click={toggleListItemClass}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;