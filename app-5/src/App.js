import React, { Component } from 'react';
import Image from './Image.js';
import './App.css';

class App extends Component {
   
  
  render() {
    return (
      <div className="App">
        <Image myImage="https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a374dfc555a6b55ca01568806bb9d476&auto=format&fit=crop&w=1350&q=80"/>
      </div>
    );
  }
}

export default App;
