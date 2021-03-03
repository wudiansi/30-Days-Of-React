import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'

const Home = (props) => <h5>Home Page</h5>

const About = (props) => <h5>About Page</h5>

const Contact = (props) => <h5>Contact us</h5>

const Challenge = (props) => (
  <div>
    <h5>30 Days Of React Challenge</h5>
  </div>
)

const NotFound = (props) => <h5>Page Not Found</h5>
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/challenges'>Challenges</NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact strict path='/about' component={About} />
            <Route exact strict path='/contact' component={Contact} />
            <Route exact strict path='/challenge' component={Challenge} />
            <Route exact strict path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Adsdsff' />, rootElement)