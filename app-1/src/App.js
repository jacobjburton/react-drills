import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      input: ''
    };
  }

  inputValue(value)
  {
    this.setState({ input: value });
  }
  
  
  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.inputValue(e.target.value) }/>
        <h4>{ this.state.input }</h4>
      </div>
    );
  }
}

export default App;
