import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Keylogger from '../Pages/Keylogger';
import Codelist from '../Pages/Codelist';
import Calculator from '../Pages/Calculator';


export default () => (
    <Router>
      <div>
        <ul className="Nav_Menu">
          <h1>Helio Training React Exercises</h1>
          <li><NavLink to='/' className="Nav_Link1">Home</NavLink></li>
          <li><NavLink to='/Keylogger' className="Nav_Link2">Keylogger</NavLink></li>
          <li><NavLink to='/Calculator' className="Nav_Link3">Calculator</NavLink></li>
          <li><NavLink to='/CodeList' className="Nav_Link4">Code List</NavLink></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/Keylogger" component={Keylogger} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/CodeList" component={Codelist} />
      </div>
    </Router>
)


