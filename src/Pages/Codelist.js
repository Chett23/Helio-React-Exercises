import React, { Component } from 'react';
import List from '../Components/List';
import Button from '../Components/Button';
import Body from '../Components/Body';

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
      <Body justify='center'>
        <hr />
        <h1>Code List</h1>
        Some ski resorts to vist:
        <ul>
          <br />
          <List
            listStyle='none'
            marginLeft='-65px'
            items={this.state.skiResorts.map((item, i) => (
              <div>
                {item}
                <Button onClick={this.clearItem(i)}>x</Button>
              </div>
            ))}
          />
        </ul>
        <br />
      </Body>
    );
  }
}

export default Codelist;