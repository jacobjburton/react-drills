import React, { Component } from 'react';


class NewTask extends Component
{
    constructor()
    {
        super();
        
        this.state =
        {
            input: ''
        };

        this.inputValue = this.inputValue.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    inputValue(val)
    {
        this.setState({ input: val });
    }

    addNewTask()
    {
        this.props.add(this.state.input);
        this.setState({ input: "" });
    }


    render ()
    {
        return (
            <div>
                <input 
                    value={this.state.input}
                    onChange={ (e) => this.inputValue(e.target.value) } />
                
                <button onClick={ this.addNewTask }>Add</button>
                
            </div>
        );
    }
}

export default NewTask;