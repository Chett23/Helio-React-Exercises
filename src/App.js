import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textValue: ''
  }

  handleChange = (element) => this.setState({
      textValue : element.target.value})

  render() {
    return (
      <div className="App">
        <div>
         Input Text: <input type='text' onChange={this.handleChange} />
        </div>
        <div>
         Input Value: {this.state.textValue}
        </div>
      </div>
    );
  }
}

export default App;
