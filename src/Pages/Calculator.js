import React, { Component } from 'react';
import NumberPad from '../Components/NumberPad';
import Button from '../Components/Button';

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

  add = () => this.setState({
    total: this.state.num1 + this.state.num2
  })

  sub = () => this.setState({
    total: this.state.num1 - this.state.num2
  })

  multiply = () => this.setState({
    total: this.state.num1 * this.state.num2
  })

  divide = () => this.setState({
    total: this.state.num1 / this.state.num2
  })

  render() {
    return (
      <div className='excersise'>
      <hr />
        <h1>Calculator</h1>
        Num 1: <input onChange={this.handleChangeNum1} type="text" />
        <br />
        Num 1: <input onChange={this.handleChangeNum2} type="text" />
        <br />
        <div>
          <Button width='50px' color='blue' textColor='white' onClick={this.add}>+</Button>
          <Button width='50px' color='red' onClick={this.sub}>-</Button>
          <Button width='50px' color='green' onClick={this.multiply}>*</Button>
          <Button width='50px' color='yellow' onClick={this.divide}>/</Button>
        </div>
        <br /> 
        {this.state.total}
      </div>
    );
  }
}

export default Calculator;