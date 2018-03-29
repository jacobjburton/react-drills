import React, { Component } from 'react';

class Login extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            username: "",
            password: ""
        };
        this.loginClick = this.loginClick.bind(this);
    }

    usernameInput(username)
    {
        this.setState({ username: username });
    }

    passwordInput(password)
    {
        this.setState({ password: password });
    }

    loginClick()
    {
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    }

    render()
    {
        return (
            <div>
                <input onChange={(e) => this.usernameInput(e.target.value)}/>
                <input onChange={(e) => this.passwordInput(e.target.value)}/>
                <button onClick={() => this.loginClick()}>Login</button>
            </div>
        );
    }

}

export default Login;