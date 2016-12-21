import React, { Component } from 'react';
import 'whatwg-fetch'; // Polyfills window.fetch
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 3
    };

    fetch('http://localhost:3001/counter')
      .then(res => res.json())
      .then(json => {
        this.setState({
          count: json.count
        })
      })
      .catch(error => {
        console.error('Error loading counter api', error.message)
      })
  }
  
  onChangeCount(change) {
    this.setState({
      count: this.state.count + change
    });
    /*
    this.setState((previousState) => ({
      count: previousState + change
    }));
    */
  }
  
  render() {
    return (
      <main className="App">
        <button onClick={ this.onChangeCount.bind(this, 1) }>+</button>
        <button onClick={ this.onChangeCount.bind(this, -1) }>−</button>
        <h2>{ this.state.count }</h2>
      </main>
    );
  }
}

export default App;
