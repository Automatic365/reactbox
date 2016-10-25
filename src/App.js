import React, { Component } from 'react';
import './App.css';
import InputSubmission from './InputSubmission'
import IdeasList from './IdeasList'

class App extends Component {
  constructor(){
    super();

    this.state = { ideas: [] };
  }

  componentDidMount() {
    let ideasFromStorage = localStorage.getItem('ideas');
    ideasFromStorage = JSON.parse(ideasFromStorage);
    this.setState({ideas: ideasFromStorage ? ideasFromStorage : []});
  }

  addIdea(idea){
    this.state.ideas.push( idea );
    localStorage.setItem('ideas', JSON.stringify(this.state.ideas))
    this.setState( { ideas: this.state.ideas } );
  }

  render() {
    let ideasList = this.state.ideas;

    return (
      <div>
      <InputSubmission sendIdea={ this.addIdea.bind(this) } /><br/>

      <IdeasList ideas={ this.state.ideas } />
      </div>
    );
  }
}

export default App;
