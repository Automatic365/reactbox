import React, { Component } from 'react';

const IdeasList = ({ideas}) => {
  return(
    <div>
    {ideas.map( (idea) => <Idea {...idea} />) }
    </div>
  )
};

const Idea = ( {title, body, id} ) => {
  return(
    <div id={id} className='idea' {
      constructor() {

      }
    }>
    <h1>{title} - {id}</h1>
    <h1>{body}</h1>
    <button onClick={} >Delete</button>
    </div>
  )
}

export default IdeasList
