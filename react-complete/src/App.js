import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const persons = [
    { name: "Karen", sgyAge: 3 },
    { name: "Eric", sgyAge: 1.5 },
    { name: "Graham", sgyAge: 8 },
    { name: "Bernadette", sgyAge: 4 },
    { name: "Hernan", sgyAge: 0 },
    { name: "Jaskaran", sgyAge: 1 }
  ];

  const [sortAsc, setSorter] = React.useState(true);
  const sortNameHandler = () => { setSorter(!sortAsc) }

  const sortPersonByNameAsc = (a, b) => { return a.name > b.name }
  const sortPersonByNameDesc = (a, b) => { return a.name < b.name }
  let sorter = (sortAsc) ? sortPersonByNameAsc : sortPersonByNameDesc;

  return (
    <div className="App">
      <h1>Name Sorter</h1>
      <button onClick={sortNameHandler}>Sort Names</button>
      {persons.sort(sorter).map(({ name, sgyAge }) => 
        <Person name={name} sgyAge={sgyAge} />
      )}
    </div>
  );
}

export default App;
