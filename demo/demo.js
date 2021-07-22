import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
  return (
    <div class="person">
      <h1>{props.name}</h1>
      <p>sgy age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="jenny" age="1"/>
    <Person name="graham" age="7"/>
  </div>
);

ReactDOM.render(
  app,
  document.querySelector("#app")
);