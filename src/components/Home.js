import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './Home.css';
import { getChartData } from './data';

class Home extends Component {

  state = {
    chartData: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "Lautstärke, Dezibel",
          backgroundColor: "rgba(0,102,255,0.1)",
          borderColor: "rgb(128, 185, 188)",
          borderWidth: 1,
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
        }
      ]
    }
  }

  async componentDidMount() {
    const res = await getChartData();
    const dataArray = res.results[0].series[0].values
    const data = dataArray.map(item => item[1])
    console.log(data)

    this.setState(prevState => ({
      chartData: {
        ...prevState.chartData,
        datasets: prevState.chartData.datasets.map(set => ({ ...set, data }))
      }
    }));
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
        <div className="App-body">
          <Line
            data={this.state.chartData}
            width={400}
            height={400}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    )
  };
}

export default Home;
