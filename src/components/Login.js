import React, { Component } from 'react';

class Login extends Component {

    state = {
        name: "",
        password: "",
        valid: true,
        value: 80,
        authentificated: false
    }

    controllerLogin = () => {
        if (this.state.name == "Pi" && this.state.password == "root") {
            this.setState({ valid: true, authentificated: true, name: "", password: "" })
        } else {
            this.setState({ name: "", password: "", valid: false, name: "", password: "" })
        }
    }

    getAuthForm = () => (
        <div className="Auth-form">
            {this.state.valid ? <p>Login zum modifizieren.</p> : <p className="Login-failed">Please try again.</p>}
            <input
                className="input"
                onChange={event => this.setState({ name: event.target.value })}
            ></input>
            <input
                className="input"
                type="password"
                onChange={event => this.setState({ password: event.target.value })}
            ></input>
            <br></br>
            <button onClick={this.controllerLogin}>Login</button>
        </div>
    )

    getControllerGui = () => (
        <div className="Controller-form">
            <p>Gebe einen neuen Grenzwert ein:</p>
            <input
                className="controller-input"
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
            ></input>
            <button>Grenzwert ändern.</button>
        </div>
    )

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <h1>Lautstärke Grenzwert bearbeiten.</h1>
                    <p>
                        Der Chart dokumentiert in Dezibel die Lautstärke in der Klasse.
                    </p>
                </header>
                <body className="App">
                    {this.state.authentificated ? this.getControllerGui() : this.getAuthForm()}
                </body>
            </div>
        )
    };
}

export default Login;
