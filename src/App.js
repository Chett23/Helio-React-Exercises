import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment className='App'>
        <Keylogger />
        <Codelist />
      </React.Fragment>
    );
  }
}


class Keylogger extends Component {
  state = {
    textValue: ''
  }

  handleChange = (element) => this.setState({
    textValue : element.target.value
  })

  render() {
    return(
      <div className="keylogger">
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

class Codelist extends Component {
  state= {
    textValue: '',
  }

  handleValueAdd(event){
    alert(this.values[1])
  }


  render() {
    let values = ['test']
    return (
      <div className='App'>
        <button onClick={this.handleValueAdd(this.values)}>Add to List</button>
        {/* <li>{this.values}</li> */}
      </div>
    );
  }
}

export default App;
