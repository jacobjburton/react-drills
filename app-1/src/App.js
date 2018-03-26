import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      textDisplay: ""
    };
  }
  
  inputChange(val)
  {
    this.setState({ textDisplay: val })
  }
  
  
  
  render() {
    return (
      <div className="App">
        <input onChange= { (e) => this.inputChange(e.target.value) } type='text'/>
        <p> { this.state.textDisplay } </p>
      </div>
    );
  }
}

export default App;
