import React from 'react';
import './App.css';
import UserExport from './UserExport/UserExport';

class App extends React.Component {
  state = {
    username: 'boo',
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ch 3 Assignment</h1> 
        </header>
        <UserExport
          username={this.state.username}
        />
        <UserExport/>
      </div>
    );
  }
}

export default App;
