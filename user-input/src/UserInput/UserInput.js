import React from 'react';

function userInput(props) {
  const style = {
    margin: '15px 150px',
    textAlign: 'center',
    fontSize: '1.2em',
    border: '1px dotted',
    padding: '10px'
  };

  return (
    <div style={style}>
      <label htmlFor='name'>Enter Name:</label>
      <input
        type='text'
        id='name'
        value={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}

export default userInput;