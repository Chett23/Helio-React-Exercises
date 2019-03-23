import React, { Component } from 'react';
import Button from './Button';


export default class NumberPad extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='1'
            {...this.props}
          >1</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='2'
            {...this.props}
          >2</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='3'
            {...this.props}
          >3</Button>
        </div>
        <div>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='4'
            {...this.props}
          >4</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='5'
            {...this.props}
          >5</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='6'
            {...this.props}
          >6</Button>
        </div>
        <div>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='7'
            {...this.props}
          >7</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='8'
            {...this.props}
          >8</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='9'
            {...this.props}
          >9</Button>
        </div>
        <div>
          <Button
            width={(parseInt(this.props.btnWidth) * 2.05) + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='0'
            {...this.props}
          >0</Button>
          <Button
            width={this.props.btnWidth + 'px'}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='.'
            {...this.props}
          >.</Button>
          {/* <Button
            width={this.props.btnWidth}
            height={this.props.btnHeight}
            margin={this.props.margin}
            value='.'
            {...this.props}
          >=</Button> */}
        </div>
      </div>
    )
  }
}