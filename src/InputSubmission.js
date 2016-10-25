import React, { Component } from 'react';

class InputSubmission extends Component {
  constructor(){
    super();

    this.state = { title: '' };
  }
  render(){
    return(
      <div>
      <input
      type='text'
      placeholder='ReactIdeas'
      value={ this.state.title }
      onChange={ someFunction() }/>
      </div>
    );
  }
}

export default InputSubmission;
