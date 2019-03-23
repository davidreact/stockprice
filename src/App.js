import React, { Component } from 'react';
import Axios from 'axios';
import Alert from './Components/Alert';
import StockDisplay from './Components/StockDisplay';


class App extends Component {

state = {
    stockSymbol: null,
    error: null,
    stockData: null
  
  }

getDaily = () => {
  const baseUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact";
  const key=  "&apikey=FAPK2U0DP3PB33YXX&";
  const symbol = "&symbol="+(this.state.stockSymbol == null ? "MSFT" : this.state.stockSymbol);
  const url = baseUrl+key+symbol

  // console.log('get Daily',url);
  
  Axios.get(url)
    .then(response => {
      // console.log('response',response); 
      return (response.data)})
    .then(responsedata => {
      // console.log('j
      if ("Error Message" in responsedata){
          this.setState({error: "Ouch! That didn't Work, try to type a valid stock code again for example MSFT"})
        } else {
         this.setState({stockData: responsedata, error: null})
        }
      })
    .catch(error => {console.log('error', error)   
      this.setState({error: "Oops something went wrong"})});
}

  render() {
     return (
      <div>
        <h2>Stock Price</h2>
        <p>Enter the Stock Symbol</p>
        <input type="text" 
               name="StockSymbol" 
               onChange={() => this.setState({stockSymbol: event.target.value})}
               defaultValue="MSFT"/>
        <button onClick={()=> this.getDaily() }>Search</button>
        {this.state.error == null ? "": <Alert message={this.state.error}/>}
        {this.state.stockData == null?"":<StockDisplay stockData={this.state.stockData}/>}
      </div>
    )
  }
}

export default App;