import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Image from './Image.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image displayImage= {"https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f18acb8db93abc281f66dcfd2ad9e61&auto=format&fit=crop&w=500&q=60" }/>
      </div>
    );
  }
}

export default App;
