import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state =
    {
      output: ""
    };
  }

  inputValue(val)
  {
    this.setState( { output: val } )
  }
  
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={ (e) => this.inputValue(e.target.value) } />
        <p> { this.state.output } </p>
      </div>
    );
  }
}

export default App;
