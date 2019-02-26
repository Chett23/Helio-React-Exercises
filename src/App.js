import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Keylogger from './Keylogger';
import Codelist from './Codelist';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <React.Fragment className="AppDiv">
        <Keylogger />
        <Codelist />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default App;