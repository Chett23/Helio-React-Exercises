import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Keylogger />
        <hr />
        <Codelist />
        <hr />
        <Calculator />
        <hr />
      </React.Fragment>
    );
  }
}

class Keylogger extends Component {
  constructor(props) {
    super(props);
    this.wasEnter = this.wasEnter.bind(this);
    this.state = {
      textValue: '',
      listValues: ['Nothing in your To-do list'],
      updatedList: [],
      itemNumber: 1,
      searchValue: ''
    }
  }

  handleChange = (element) => this.setState({
    textValue: element.target.value
  })

  handleValueAdd = () => {
    if (this.state.listValues[0] === 'Nothing in your To-do list') {
      this.setState({
        itemNumber: this.state.itemNumber + 1,
        textValue: '',
        listValues: [(this.state.itemNumber + '. ' + this.state.textValue + ' ')]
      })
    } else {
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

  handleSearch = (event) => this.setState({
    searchValue: event.target.value
  })

  wasEnter = (event) => {
    if (event.key === 'Enter' && this.state.textValue !== '') {
      return this.handleValueAdd()
    }
  }

  clearItem = (item) => {
    const list = this.state.listValues
    this.setState({
      updatedList: list
    })
    console.log(item.key)
    console.log(this.state.updatedList)
  }

  clearList = () => this.setState({
    listValues: ['Nothing in your To-do list'],
    textValue: '',
    itemNumber: 1
  })

  render() {
    const items = this.state.listValues.map((item) => {
      if (item === 'Nothing in your To-do list') {
        return (
          <li>
            {item}
          </li>
        )
      } else {
        return (
          <li>
            {item}
          </li>
        )
      }
    })

    const searchList = this.state.listValues.filter((x) => { return x.includes(this.state.searchValue) })
      .map((item) => {
        return (
          <li>
            {item}
          </li>
        )
      })

    return (
      <div className="keylogger" >
        <h1>Keylogger</h1>
        <div>
          <input
            placeholder='Add something to the list...'
            type='text'
            id="textField"
            onChange={this.handleChange}
            value={this.state.textValue}
            onKeyPress={this.wasEnter}
          />
        </div>
        <div>
          <input
            placeholder='Search for something in the list...'
            type='text'
            id="textField"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          Input Value: {this.state.textValue}
        </div>
        <div className='add'>
          <button onClick={this.handleValueAdd}>Add to List</button>
          <button onClick={this.clearList}>Clear List</button>
          <ol>
            {this.state.searchValue === '' ? items : searchList.length ? searchList : <li>These arent the Droids you're looking for</li>}
          </ol>
        </div>
      </div>
    );
  }
}

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0
  }

  handleChangeNum1 = (element) => this.setState({
    num1: parseInt(element.target.value)
  })

  handleChangeNum2 = (element) => this.setState({
    num2: parseInt(element.target.value)
  })

  addTheNumbers = () => this.setState({
    total: this.state.num1 + this.state.num2
  })

  render() {
    return (
      <div className='Calc'>
        <h1>Add Two Numbers</h1>
        Num 1: <input onChange={this.handleChangeNum1} type="text" />
        <br />
        Num 1: <input onChange={this.handleChangeNum2} type="text" />
        <br />
        <button onClick={this.addTheNumbers}>Add</button>
        <br />
        {this.state.total}
      </div>
    );
  }
}

class Codelist extends Component {
  state = {
    skiResorts: ['Park City', 'Canyons', 'Deer Valley', 'Brighton', 'Solitude', 'Snow Bird', 'Alta', 'Vail', 'Tahoe']
  }

  setToList = this.state.skiResorts.map((item) =>
    <li>{item}</li>
  )

  render() {
    return (
      <div className="App">
        <h1>Code List</h1>
        <ul>Some ski resorts to vist:
          <br />
          {this.setToList}
        </ul>
        <br />
      </div>
    );
  }
}

export default App;