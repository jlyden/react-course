import React from 'react';

class UserInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={this.props.name}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default UserInput;