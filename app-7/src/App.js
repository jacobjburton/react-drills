import React, { Component } from 'react';
import NewTask from './NewTask.js';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      taskArr: []
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask (val)
  {
    let newList = this.state.taskArr.slice();
    newList.push(val);
    this.setState({ taskArr: newList });
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.taskArr}/>
      </div>
    );
  }
}

export default App;

