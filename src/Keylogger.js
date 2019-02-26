import React, { Component } from 'react';

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
        if (this.state.textValue == '') {

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

    // clearItem = (item) => {
    //   const list = this.state.listValues
    //   this.setState({
    //     updatedList: list
    //   })
    //   console.log(item.key)
    //   console.log(this.state.updatedList)
    // }

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
                        {item}<button onClick={this.clearItem}>X</button>
                    </li>
                )
            }
        })

        const searchList = this.state.listValues.filter((x) => { return x.includes(this.state.searchValue) })
            .map((item) => {
                return (
                    <li>
                        {item}<button onClick={this.clearItem}>X</button>
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
                        id="textField"
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
                        id="textField"
                        onChange={this.handleSearch}
                    />
                </div>
                <div>
                    Input Value: {this.state.textValue}
                </div>
                <div className='add'>
                    <button onClick={this.clearList}>Clear List</button>
                    <ol>
                        {this.state.searchValue === '' ? items : searchList.length ? searchList : <li>These arent the Droids you're looking for</li>}
                    </ol>
                </div>
            </div>
        );
    }
}


export default Keylogger;