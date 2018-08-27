import React, { Component } from 'react'; // eslint-disable-line
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">wow to React</h1>
        </header>
        <p className="App-intro">Woah Whoop</p>
      </div>
    );
  }
}

export default App;
