import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state =
    {
      listArr: ['pizza', 'porknbeans', 'bananas']
    };
  }
  
    
  render() 
  {
    let list = this.state.listArr.map((e, i) => 
    {
      return (
        <h2 key={i}>{e}</h2>
      );
    });
    return (
      <div className="App">
        { list }
      </div>
    );
  }
}

export default App;
