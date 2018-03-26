import React, { Component } from 'react';
import './App.css';
//import Todo from './Todo.js';
import List from './List.js';
import NewTask from './NewTask.js';

class App extends Component {
  constructor()
  {
    super();

    this.state =
    {
      list: ['pizza', 'banana']
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(newTask)
  {
    var newList = this.state.list.slice();
    newList.push(newTask);
    this.setState({ list: newList });
  }
  
  render() {
    return (
      <div className="App">
        <h1> My To-Do List: </h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
