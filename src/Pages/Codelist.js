import React, { Component } from 'react';
import List from '../Components/List';
import Button from '../Components/Button';

class Codelist extends Component {
  state = {
    skiResorts: ['Park City', 'Canyons', 'Deer Valley', 'Brighton', 'Solitude', 'Snow Bird', 'Alta', 'Vail', 'Tahoe']
  }

  setToList = this.state.skiResorts.map((item) =>
    <li>{item}</li>
  )

  clearItem = (index) => () => {
    this.state.skiResorts.splice(index, 1)
    this.setState({
      listValues: this.state.skiResorts
    })
  }

  render() {
    return (
      <div className="excersise">
        <hr />
        <h1>Code List</h1>
        <ul>Some ski resorts to vist:
          <br />
          <List
            items={this.state.skiResorts.map((item, i) => (
              <div>
                <span>{item}</span>
                <Button onClick={this.clearItem(i)}>x</Button>
              </div>
            ))}
          />
        </ul>
        <br />
      </div>
    );
  }
}

export default Codelist;