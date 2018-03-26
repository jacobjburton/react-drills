import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state =
    {
      tasks: [],
      newTask: ""
    };

    this.inputValue = this.inputValue.bind(this);
    this.moreTasks = this.moreTasks.bind(this);
  }

  inputValue(val)
  {
    this.setState({ newTask: val });
  }
  
  moreTasks()
  {
    var newList = this.state.tasks.slice();
    newList.push(this.state.newTask);
    this.setState({ tasks: newList });

  }
  
  render() {
    var tasks = this.state.tasks.map((e, i) => {
      return (
        <Todo key={i} tasks={e}/>
      );
    })
    
    
    return (
      <div className="App">
        <h1>To-Do List:</h1>
        <input 
          value={this.state.newTask}
          placeholder="Add a new task"
          onChange={ (e) => this.inputValue( e.target.value ) }/>

        <button onClick={ this.moreTasks }>Add</button>

        {tasks}
      </div>
    );
  }
}

export default App;
