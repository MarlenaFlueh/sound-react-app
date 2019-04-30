import React, { Component } from 'react';

class Login extends Component {

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
                    <div className="Auth-form">
                        <input className="input"></input>
                        <input className="input"></input>
                        <br></br>
                        <button>submit</button>
                    </div>
                </body>
            </div>
        )
    };
}

export default Login;
