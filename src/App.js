import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Keylogger />
        <Calculator />
      </React.Fragment>
    );
  }
}

class Keylogger extends Component {
  state = {
    textValue: '',
    listValues: ['Nothing in your To-do list'],
    itemNumber: 1
  }

  handleChange = (element) => this.setState({
    textValue : element.target.value
  })

  handleValueAdd = () => {
    if (this.state.listValues[0] === 'Nothing in your To-do list'){
      this.setState({
        itemNumber: this.state.itemNumber + 1,
        textValue: '',
        listValues: [(this.state.itemNumber + '. ' + this.state.textValue + ' ')]
      })
    }else {
      this.setState({
        itemNumber: this.state.itemNumber + 1,
        textValue: '',
        listValues: [
          ...this.state.listValues, 
          (this.state.itemNumber + '. ' + this.state.textValue + ' ')
        ]
      })
    }
  }

  clearList = () => this.setState({
    listValues: ['Nothing in your To-do list']
  })

  render() {
    return(
      <div className="keylogger">
        <h1>Keylogger</h1>
        <div>
          Input Text: <input type='text' onChange={this.handleChange} />
        </div>
        <div>
         Input Value: {this.state.textValue}
        </div>
        <div className='add'>
          <button onClick={this.handleValueAdd}>Add to List</button>
          <button onClick={this.clearList}>Clear List</button>
          <ol>{this.state.listValues}</ol>
        </div>
      </div>
    );
  }
}

// class Codelist extends Component {
//   state= {
//     listvalues: ['Nothing in your To-do list']
//   }

//   handleValueAdd(event){
//     if (this.state.values[0] === 'Nothing in your To-do list') {
//       this.state.values[0] = Keylogger.state.textValue
//     } else {
//       this.state.values.push = Keylogger.state.textValue
//     }
//   }


//   render() {
//     return (
//       <div className='add'>
//         <button onClick={this.handleValueAdd}>Add to List</button>
//       </div>
//     );
//   }
// }

export default App;
