import React, { Component } from 'react';
import Button from '../Components/Button';
// import List from '../Components/List';
import Body from '../Components/Body';
import Input from '../Components/Input';


class Keylogger extends Component {
  constructor(props) {
    super(props);
    this.wasEnter = this.wasEnter.bind(this);
    this.state = {
      textValue: '',
      listValues: [],
      updatedList: [],
      itemNumber: 1,
      searchValue: ''
    }
  }

  handleChange = (element) => this.setState({
    textValue: element.target.value
  })

  handleValueAdd = () => {
    if (this.state.textValue === '') {

    } else {
      this.setState({
        textValue: '',
        listValues: [...this.state.listValues, this.state.textValue]
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

  clearItem = (index) => () => {
    this.state.listValues.splice(index, 1)
    this.setState({
      listValues: this.state.listValues,
      itemNumber: this.state.itemNumber - 1
    })
  }


  clearList = () => this.setState({
    listValues: [],
    textValue: '',
    itemNumber: 1
  })

  render() {
    const list = this.state.listValues.map((item, i) => {
      if (item === 'Nothing in your To-do list') {
        return (
          <li key='i'>
            {item}
          </li>
        )
      } else {
        return (
          <li key='i'>
            {item}<Button onClick={this.clearItem(i)}>x</Button>
          </li>
        )
      }
    })

    const searchList = this.state.listValues.filter((x) => { return x.includes(this.state.searchValue) })
      .map((item, i) => {
        return (
          <li key='i'>
            {item}<Button onClick={this.clearItem(i)}>x</Button>
          </li>
        )
      })

    return (
      <Body justify='center'>
        <hr />
        <h1>Keylogger</h1>
        <div>
          <Input
            placeholder='Add something to the list...'
            type='text'
            onChange={this.handleChange}
            value={this.state.textValue}
            onKeyPress={this.wasEnter}
            className="input"
            width='264px'
            margin='5px'
            padding='2px'
          />
          <button onClick={this.handleValueAdd}>Add</button>
        </div>
        <div>
          <Input
            placeholder='Search for something in the list...'
            type='text'
            onChange={this.handleSearch}
            width='300px'
            margin='5px'
            padding='2px'
          />
        </div>
        <div style={{ margin: '10px' }}>
          Input Value: {this.state.textValue}
        </div>
        <div>
          <Button onClick={this.clearList}>Clear List</Button>
          <div style={{ listStyle: 'inside', margin: '0', paddingRight: '50px' }}>
            {!this.state.listValues.length && <ul>Nothing in your To-Do list</ul>}
            <ol>
              {this.state.searchValue === '' ? list : searchList.length ? searchList : <ul><li>These are not the droids you're looking for.</li></ul>}
            </ol>
          </div>
        </div>
      </Body>
    );
  }
}


export default Keylogger;