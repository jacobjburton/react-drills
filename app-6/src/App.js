import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state =
    {
      input: '',
      taskArr: []
    };
    
    this.addnewTask = this.addnewTask.bind(this)
  }

  inputValue(value)
  {
    this.setState({ input: value });
  }

  addnewTask()
  {
    let newArr = this.state.taskArr.slice();
    newArr.push(this.state.input);
    this.setState(
    { 
      taskArr: newArr,
      input: "" 
    });
    
  }
  
  
  render() 
  {
    let arrDisplay = this.state.taskArr.map((e,i) =>
    {
      return (
        <Todo key={i} task={e}/>
      ); 
    }); 
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input 
          value={this.state.input}
          placeholder="Add new task"
          onChange={(e) => this.inputValue(e.target.value)}/>
        <button onClick={() => this.addnewTask()}>Add</button>
        {arrDisplay}
      </div>
    );
  }
}

export default App;
