import React, { Component } from 'react';
import Button from '../Components/Button';
import List from '../Components/List';

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
        if (this.state.textValue === '') {

        } else if (this.state.listValues[0] === 'Nothing in your To-do list') {
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

    clearItem = (index) => () => {
      this.state.listValues.splice(index, 1)
      this.setState({
        listValues: this.state.listValues
      })
    }


    clearList = () => this.setState({
        listValues: ['Nothing in your To-do list'],
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
            <div className="keylogger" >
                <hr />
                <h1>Keylogger</h1>
                <div className="inputs">
                    <input
                        placeholder='Add something to the list...'
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.textValue}
                        onKeyPress={this.wasEnter}
                        className="input"
                        />
                    <button onClick={this.handleValueAdd}>Add</button>
                </div>
                <div className="search">
                    <input
                        placeholder='Search for something in the list...'
                        type='text'
                        onChange={this.handleSearch}
                    />
                </div>
                <div>
                    Input Value: {this.state.textValue}
                </div>
                <div className='add'>
                    <Button onClick={this.clearList}>Clear List</Button>
                    <ol>
                        {this.state.searchValue === '' ? list : searchList.length ? searchList : <li>These are not the droids you're looking for.</li>}
                    </ol>
                </div>
            </div>
        );
    }
}


export default Keylogger;