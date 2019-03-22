import React, { Component } from 'react';
import Fetch from 'fetch';


class App extends Component {

state = {stockSymbol: null}

getDaily = () => {
  const baseUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact"
  const key="&apikey=FAPK2U0DP3PB33YX"


  Fetch()
}

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h2>Stock Price</h2>
        <p>Enter the Stock Symbol</p>
        <input type="text" name="StockSymbol" onChange={this.setState({stockSymbol: value})}/>
        <button></button>
      </div>
    )
  }
}

export default App;