import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Home.css';

class Home extends Component {
  data = {
    labels: [1, 3, 5, 6, 5, 8, 5, 6, 8, 4],
    datasets: [
      {
        label: "Lautstärke, Dezibel",
        backgroundColor: "rgba(0,102,255,0.1)",
        borderColor: "rgb(128, 185, 188)",
        borderWidth: 1,
        data: [1, 5, 6, 8, 5, 7, 8, 5, 6, 8, 4]
      }
    ]
  }

  redirectToTarget = () => {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lautstärke Übersicht</h1>
          <p>
            Der Chart dokumentiert in Dezibel die Lautstärke in der Klasse.
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.redirectToTarget}
          >
            Login to Controller
        </a>
        </header>
        <body className="App-body">
          <Line
            data={this.data}
            width={400}
            height={400}
            options={{ maintainAspectRatio: false }}
          />
        </body>
      </div>
    )
  };
}

export default Home;
