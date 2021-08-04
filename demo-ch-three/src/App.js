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
      <div className="app">
        <header className="app-header">
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
        <hr></hr>
        <div className="instructions">
          <p className="instructions-title">TODO</p>
          <ol className="instructions-list">
            <li>Create two components: UserInput, UserOutput and add to App</li>
            <li>Create input element in UserInput, two paragraphs of text in UserOutput</li>
            <li>Output multiple UserOutputs into App</li>
            <li>Pass username to UserOutput via props and display</li>
            <li>Add state to App (username) and pass to UserOutput</li>
            <li>Add event-handler method to update state</li>
            <li>Pass event-handler ref to UserInput component and bind to input-change event</li>
            <li>Ensure new input overwrites old username passed to UserOutput</li>
            <li>Add two-way-binding to input (in UserInput) to display starting username</li>
            <li>Add styling to components/element, inline and with stylesheet</li>
            <li>Ensure all modules are supported by tests</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
