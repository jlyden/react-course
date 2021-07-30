import React from 'react';
import './App.css';
import Person from './Person/Person';

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
  const sortByNameAsc = (a, b) => (a.name > b.name) ? 1 : -1;
  const sortByNameDesc = (a, b) => -(sortByNameAsc(a,b));
  let sorter = sortAsc ? sortByNameAsc : sortByNameDesc;

  return (
    <div className="App">
      <h1>Name Sorter</h1>
      <div className="container">
        <button onClick={toggleSort}>Sort Names</button>
      </div>
      <ul>
        {persons.sort(sorter).map(({ name, sgyAge }) =>
          <li key={name+sgyAge}>
            <Person name={name} sgyAge={sgyAge}/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;