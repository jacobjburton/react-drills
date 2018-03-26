import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      arr: ["pizza", 'banana', 'pork and beans', 'stuffs']
    };
  }
  
  
  render() {
    var arrDisplay = this.state.arr.map( (e, i) => {
      return (
        <p key={ i }> { e } </p>
      )
    })
    
    return (
      <div className="App">
        <p> { arrDisplay } </p>
      </div>
    );
  }
}

export default App;
