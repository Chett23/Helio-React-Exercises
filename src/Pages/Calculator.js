import React, { Component } from 'react';
import NumberPad from '../Components/NumberPad';
import Button from '../Components/Button';
import Body from '../Components/Body';

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
      <Body justify= 'center'>
      <hr />
        <h1>Calculator</h1>
        {this.state.total}
        <div>
          <Button width='50px' height='50px'color='blue' textColor='white' onClick={this.add}>+</Button>
          <Button width='50px' height='50px'color='red' onClick={this.sub}>-</Button>
          <Button width='50px' height='50px'color='green' onClick={this.multiply}>*</Button>
          <Button width='50px' height='50px'color='yellow' onClick={this.divide}>/</Button>
          <NumberPad btnWidth='50px' btnHeight='50px' />
        </div>
      </Body>
    );
  }
}

export default Calculator;