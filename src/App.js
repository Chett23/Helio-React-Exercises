import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Keylogger from './Keylogger';
import Codelist from './Codelist';
import Calculator from './Calculator';


const Home = () => (
  <div>
    <hr />
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <ul className="Nav_Menu">
              <h1>Helio Training React Exercises</h1>
                <li><NavLink to='/' className="Nav_Link1">Home</NavLink></li>
                <li><NavLink to='/Keylogger' className="Nav_Link2">Keylogger</NavLink></li>
                <li><NavLink to='/Calculator' className="Nav_Link3">Calculator</NavLink></li>
                <li><NavLink to='/CodeList' className="Nav_Link4">Code List</NavLink></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/Keylogger" component={Keylogger}/>
            <Route path="/Calculator" component={Calculator}/>
            <Route path="/CodeList" component={Codelist}/>
        </div>
    </Router>
    );
  }
}

export default App;