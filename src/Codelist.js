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
        <h1>Code List</h1>
        <ul>Some ski resorts to vist:
            <br />
          {this.setToList}
        </ul>
        <br />
        <hr />
      </div>
    );
  }
}

export default Codelist;