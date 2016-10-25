import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission'

class App extends Component {
  constructor(){
    super();

    this.state = { ideas: [] };
  }

  
  render() {
    return (
      <div>
      <InputSubmission /><br/>
      </div>
    );
  }
}

export default App;
