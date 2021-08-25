import React from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';

class App extends React.Component {
  state = {
    name: 'Bob',
    textLength: 0,
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
            <li className="crossout">Create two components: UserInput, UserOutput and add to App</li>
            <li className="crossout">Create input element in UserInput, two paragraphs of text in UserOutput</li>
            <li className="crossout">Output multiple UserOutputs into App</li>
            <li className="crossout">Pass username to UserOutput via props and display</li>
            <li className="crossout">Add state to App (username) and pass to UserOutput</li>
            <li className="crossout">Add event-handler method to update state</li>
            <li className="crossout">Pass event-handler ref to UserInput component and bind to input-change event</li>
            <li className="crossout">Ensure new input overwrites old username passed to UserOutput</li>
            <li className="crossout">Add two-way-binding to input (in UserInput) to display starting username</li>
            <li className="crossout">Add styling to components/element, inline and with stylesheet</li>
            <li className="crossout">Ensure all modules are supported by tests</li>
          </ol>
        </div>
      </div>
    )
  }

  getTextareaInputLength = (e) => {
    if(e) {
      this.setState({
        textLength: e.target.value.length
      });
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
              onChange={(e) => this.getTextareaInputLength(e)}
            />
          </div>
          <p>Char Count: {this.state.textLength}</p>
          <Validation textLength={this.state.textLength}/>
        <hr />
        <div className="instructions">
          <p className="instructions-title">TODO</p>
          <ol className="instructions-list">
            <li className="crossout">Create input field (in App) for a paragraph with change listener outputting length of entered text</li>
            <li className="crossout">Create new component (ValidationComponent) which receives textLength as prop</li>
            <li className="crossout">In VC, output 'Text too short' or 'Text long enough' with whatever boundary you like</li>
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
