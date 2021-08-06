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

  renderChapterThreeWork() {
    return (
      <div id="chapter-three">
        <h2>Chapter Three</h2>
        <UserInput
          name={this.state.name}
          onChange={this.changeNameHandler}
        />
        <UserOutput
          name={this.state.name}
        />
        <UserOutput/>
        <hr />
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
    )
  }

  getTextareaInputLength = (event) => {
    if(event) {
      console.log(event.target.value);
      console.log(event.target.value.length);
      return event.target.value.length;
    }
  }

  renderChapterFourWork() {
    return (
      <div id="chapter-four">
        <h2>Chapter Four</h2>
          <div className="paragraph-input">
            <textarea 
              name="paragraph"
              rows="5"
              cols="75"
            />
          </div>
          <p>Char Count: {this.getTextareaInputLength()}</p>
        <hr />
        <div className="instructions">
          <p className="instructions-title">TODO</p>
          <ol className="instructions-list-clean">
            <li>Create input field (in App) for a paragraph with change listener outputting length of entered text</li>
            <li>Create new component (ValidationComponent) which receives textLength as prop</li>
            <li>In VC, output 'Text too short' or 'Text long enough' with whatever boundary you like</li>
            <li>Create another componet (CharComponent) and style as inline box (display: inline-block, padding: 16px, text-align:center, margin: 16px, border: 1px solid black)</li>
            <li>Render list of CharComponents where each CC receives different letter of entered text as prop</li>
            <li>NOTE: use string.split() and array.join() to turn string into array and back again</li>
            <li>When click CC, it should be removed from text</li>
          </ol>
        </div>
      </div> 
    )
  }


  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Assignments</h1> 
        </header>
        {this.renderChapterFourWork()}
        <hr />
        {this.renderChapterThreeWork()}
      </div>
    );
  }
}

export default App;
