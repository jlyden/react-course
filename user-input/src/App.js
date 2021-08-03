import React from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends React.Component {
  state = {
    name: 'Bob',
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ch 3 Assignment</h1> 
        </header>
        <UserInput
          name={this.state.name}
          onChange={this.changeNameHandler}
        />
        <UserOutput
          name={this.state.name}
        />
        <UserOutput/>
      </div>
    );
  }
}

export default App;
