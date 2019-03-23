import React, { Component } from 'react';
import NumberPad from '../Components/NumberPad';
import Button from '../Components/Button';
import Body from '../Components/Body';

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    operand: '',
    display: 0
  }

  handleBtnPress = (element) => {
    if (element.target.value === 'AC') {
      this.setState({
        num1: 0,
        num2: 0,
        operand: '',
        display: '0'
      })
    } else if (element.target.value === '+' ||
      element.target.value === '-' ||
      element.target.value === '*' ||
      element.target.value === '/') {
      this.setState({
        operand: element.target.value,
        display: '0'
      })
    } else {
      this.setState({
        display: this.state.display + element.target.value
      })
    }
  }

  // handleBtnPress = (element) => this.setState({
  //     calcNum: parseInt(element.target.value)
  //   })

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
      <Body justify='center'>
        <hr />
        <h1>Calculator</h1>
        <h2>{this.state.display}</h2>
        <div style={{display: 'grid-inline', gridTemplateAreas: "'Button''Button''Button''Button' 'NumberPad''Button'"}}>
          <Button width='70px' height='70px' margin='2px' onClick={this.handleBtnPress} value='+'>+</Button>
          <Button width='70px' height='70px' margin='2px' onClick={this.handleBtnPress} value='-'>-</Button>
          <Button width='70px' height='70px' margin='2px' onClick={this.handleBtnPress} value='*'>*</Button>
          <Button width='70px' height='70px' margin='2px' onClick={this.handleBtnPress} value='/'>/</Button>
          <NumberPad btnWidth='70' btnHeight='70px' margin='2px' onClick={this.handleBtnPress} />
        </div>
      </Body>
    );
  }
}

export default Calculator;