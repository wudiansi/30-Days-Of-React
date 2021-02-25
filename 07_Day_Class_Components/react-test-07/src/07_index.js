import React from 'react';
import ReactDOM from 'react-dom';

import asabenehImage from './images/asabeneh.jpg'

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { techs } = this.props
    const techFormatted = techs.map(tech => <li key={tech} tech={tech}></li>)
    return techFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button
            text='Greet People'
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text='Show Time'
            onClick={this.props.handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copaytight {this.props.data.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'Javascript']

    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople} />
        <Footer data={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

/** 
 * Functional Components                  	                         Class Components                
A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.	A class component requires you to extend from React. Component and create a render function which returns a React element.
There is no render method used in functional components.	It must have the render() method returning HTML
Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.	Also known as Stateful components because they implement logic and state.
React lifecycle methods (for example, componentDidMount) cannot be used in functional components.	React lifecycle methods can be used inside class components (for example, componentDidMount).
 * */ 
