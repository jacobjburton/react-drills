import React, { Component } from 'react';


class NewTask extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            input: ""
        };

        this.buttonClick = this.buttonClick.bind(this);
    }

    inputValue(val)
    {
        this.setState({ input: val });
    }

    buttonClick()
    {
        this.props.add(this.state.input);
        this.setState({ input: '' });
    }

    render()
    {
        return (
            <div>
                <input
                    value={this.state.input} 
                    onChange={(e) => this.inputValue(e.target.value)}
                    placeholder="Add new task"/>
                <button onClick={() => this.buttonClick()}>Add</button>
            </div>
        );
    }
}


export default NewTask;