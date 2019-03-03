import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Helmet from './Components/Helmet'
import './App.css';
import Keylogger from './Pages/Keylogger';
import Codelist from './Pages/Codelist';
import Calculator from './Pages/Calculator';
import Tacos from './Pages/Tacos';
import NotFound from './Pages/NotFound';



class App extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Router>
          <div>
            <ul className="Nav_Menu">
              <h1>Helio Training React Exercises</h1>
              <li><NavLink to='/' className="Nav_Link1">Home</NavLink></li>
              <li><NavLink to='/Keylogger' className="Nav_Link2">Keylogger</NavLink></li>
              <li><NavLink to='/Calculator' className="Nav_Link3">Calculator</NavLink></li>
              <li><NavLink to='/CodeList' className="Nav_Link4">Code List</NavLink></li>
            </ul>
            <Switch> 
              <Route exact path="/" component={Home} />
              <Route path="/Keylogger" component={Keylogger} />
              <Route path="/Calculator" component={Calculator} />
              <Route path="/CodeList" component={Codelist} />
              <Route path="/Tacos" component={Tacos} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


const Home = () => (
  <div>
    <hr />
    <h2>Home</h2>
  </div>
)


export default App;