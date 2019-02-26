import React, { Component } from 'react';

class Codelist extends Component {
  state = {
    skiResorts: ['Park City', 'Canyons', 'Deer Valley', 'Brighton', 'Solitude', 'Snow Bird', 'Alta', 'Vail', 'Tahoe']
  }

  setToList = this.state.skiResorts.map((item) =>
    <li>{item}</li>
  )

  render() {
    return (
      <div className="excersise">
        <hr />
        <h1>Code List</h1>
        <ul>Some ski resorts to vist:
            <br />
          {this.setToList}
        </ul>
        <br />
      </div>
    );
  }
}

export default Codelist;