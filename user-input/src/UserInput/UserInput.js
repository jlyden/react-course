import React from 'react';

class UserInput extends React.Component {
  render() {
    const style = {
      margin: '25px',
      textAlign: 'center',
      fontSize: '1.2em',
    };

    return (
      <div style={style}>
        <label htmlFor='name'>Enter Name:</label>
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