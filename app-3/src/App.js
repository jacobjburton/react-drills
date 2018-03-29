import React, { Component } from 'react';

import './App.css';

class App extends Component 
{
  constructor()
  {
    super();

    this.state =
    {
      input: '',
      list: ['banana', 'cheese', 'porknbeans', 'hellfire and damnation']
    };
  }

  inputValue(value)
  {
    this.setState({ input: value });
  }

  

  render() 
  {
    let listDisplay = this.state.list.filter((e, i) => 
    {
      return (
        e.includes(this.state.input))
    }).map((e,i) =>
    {
      return (
        <h2 key={i}>{e}</h2>
    )});
    return (
      <div className="App">
        <input onChange={(e) => this.inputValue(e.target.value)}/>
        {listDisplay}
      </div>
    );
  }
}

export default App;
