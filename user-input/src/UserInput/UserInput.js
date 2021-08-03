import React from 'react';

class UserInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder={}
          onChange={}
        />
      </div>
    )
  }
}

export default UserInput;