import React, { Component } from 'react';

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
      <div className='excersise'>
        <h1>Add Two Numbers</h1>
        Num 1: <input onChange={this.handleChangeNum1} type="text" />
        <br />
        Num 1: <input onChange={this.handleChangeNum2} type="text" />
        <br />
        <button onClick={this.addTheNumbers}>Add</button>
        <br />
        {this.state.total}
        <hr />
      </div>
    );
  }
}

export default Calculator;