import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Helmet from './Components/Helmet'
import Keylogger from './Pages/Keylogger';
import Codelist from './Pages/Codelist';
import Calculator from './Pages/Calculator';
import Tacos from './Pages/Tacos';
import NotFound from './Pages/NotFound';
import Testing from './Pages/Testing';



class App extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Router>
          <div>
            <ul 
              style={{
                listStyle: 'none', 
                display: 'inline-grid',
                gridTemplateColumns: '10px auto 100px 100px 100px 100px 100px 10px',
                width:'100%'
                }}>
              <h1 style={{
                    gridColumnStart: '2',
                    gridColumnEnd: 'span 1'
                  }}
                  >Helio Training React Exercises</h1>
              <li>
                <NavLink
                  to='/' 
                  style={{
                    gridColumnStart: '3',
                    gridColumnEnd: 'span 1',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >Home</NavLink></li>
              <li>
                <NavLink
                  to='/Keylogger' 
                  style={{
                    gridColumnStart: '4',
                    gridColumnEnd: 'span 1',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >Keylogger</NavLink></li>
              <li>
                <NavLink
                  to='/Calculator' 
                  style={{
                    gridColumnStart: '5',
                    gridColumnEnd: 'span 1',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >Calculator</NavLink></li>
              <li>
                <NavLink
                  to='/CodeList' 
                  style={{
                    gridColumnStart: '6',
                    gridColumnEnd: 'span 1',
                    textDecoration: 'none',
                    color: 'black'
                  }}
                >Code List</NavLink></li>
                <li>
                  <NavLink
                    to='/Testing' 
                    style={{
                      gridColumnStart: '6',
                      gridColumnEnd: 'span 1',
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >Testing</NavLink></li>
            </ul>
            <Switch> 
              <Route exact path="/" component={()=>(
                <div style={{ textAlign:'center' }}>
                  <hr/>
                  <h1>Home</h1>
                </div>
              )} />
              <Route path="/Keylogger" component={Keylogger} />
              <Route path="/Calculator" component={Calculator} />
              <Route path="/CodeList" component={Codelist} />
              <Route path="/Testing" component={Testing} />
              <Route path="/Tacos" component={Tacos} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;