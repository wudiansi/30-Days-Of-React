import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import { countriesData } from './data/countries'

// Fuction to show month date year

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

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    // console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Country extends React.Component {

  getRandomItem = (list) => {
    return list[Math.floor(Math.random() * list.length)]
  }

  state = {
    country: this.getRandomItem(countriesData)
  }

  constructor(props) {
    super(props)
  }

  setRadomCountry = () => {
    this.setState({
      country: this.getRandomItem(countriesData)
    })
  }

  render() {
    // name: 'Afghanistan',
    // capital: 'Kabul',
    // languages: ['Pashto', 'Uzbek', 'Turkmen'],
    // population: 27657145,
    // flag: 'https://restcountries.eu/data/afg.svg',
    // currency: 'Afghan afghani',

    const { name, capital, languages, population, flag, currency } = this.state.country
    const languageList = languages.map((language, index) => {
      return (
        <span key={index}>{language + index === languages.length ? '' : '、'}</span>
      )
    })
    return (
      <div>
        <img src={flag} alt='flag' style={{ width: '200px' }} />
        <h5>name: {name}</h5>
        <p>capital: {capital}</p>
        <p>languages: {languageList}</p>
        <p>population: {population}</p>
        <p>currency: {currency}</p>
        <Button text='changeCountry' style={buttonStyles} onClick={this.setRadomCountry} />
      </div>
    )
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
      styles,
    } = this.props

    let backgroundColor = styles.backgroundColor === '#61dbfb' ? 'white' : '#2c3e50'
    let _style = {
      backgroundColor,
      color: styles.color
    }

    return (
      <main style={_style}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
          <Country />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer style={this.props.styles}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '#61dbfb',
      color: '#000000',
    },
  }
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

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  changeBackground = () => {
    let isWhite = this.state.styles.backgroundColor === '#61dbfb'
    this.setState({
      styles: {
        backgroundColor: isWhite ? '#2c3e50' : '#61dbfb',
        color: isWhite ? '#ffffff' : '#000000'
      }
    })
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
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        <Header data={data} styles={this.state.styles} />
        <Main
          styles={this.state.styles}
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} styles={this.state.styles} />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
// import React from 'react'
// import ReactDOM from 'react-dom'

// class App extends React.Component {
//   // declaring state
//   state = {
//     count: 0,
//     image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
//   }

//   addOne = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 })
//   }

//   changeAnimal = () => {
//     let dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
//     let catURL = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
//     let image = this.state.image === catURL ? dogURL : catURL
//     this.setState({ image })
//   }

//   render() {
//     // accessing the state value
//     const count = this.state.count
//     return (
//       <div className='App'>
//         <div className='animal'>
//           <img src={this.state.image} alt='animal' />
//         </div>
//         <button 
//           onClick={ this.changeAnimal }>
//           Change
//         </button>
//         <h1>{count} </h1>
//         <div>
//           <button 
//             onClick={ this.addOne }>
//             Add One
//           </button>{' '}
//           <button 
//             onClick={ this.minusOne }>
//             Minus One
//           </button>
//         </div>
//       </div>
//     )
//   }
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)