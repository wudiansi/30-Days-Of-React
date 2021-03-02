import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header'

// import './styles/header.scss'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
      day: 1,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }
  // the doChallenge increment the day by one
  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

// const User = ({ firstName }) => (
//   <div>
//     <h5>{ firstName }</h5>
//   </div>
// )

// class App extends Component {
//   constructor (props) {
//     super(props)

//     console.log('constructor first to run')
//     this.state = {
//       firstName: 'John',
//       data: []
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextProps, nextState)
//     return true
//   }

//   // static getDerivedStateFromProps(props, state) {
//   //   console.log('getDerivedStateFromPops will be secend to run')
//   //   return { firstName: props.firstName }
//   // }

//   componentDidMount() {
//     // setTimeout(() => {
//     //   this.setState({
//     //     firstName: 'Assdsdasd'
//     //   })
//     // }, 4e3)
//     const API_URL = 'https://restcountries.eu/rest/v2/all'
//     fetch(API_URL)
//     .then((response) => {
//       return response.json()
//     })
//     .then((data) => {
//       // console.log(data)
//       this.setState({
//         data
//       })
//     })
//     .catch((error) => {
//       console.log(error)
//     })
//     console.log('componentsDidMount will be last to run')
//   }

//   renderCountries = () => {
//     return this.state.data.map((country) => {
//       return (
//         <div key={country.name}>
//           <div>
//             {' '}
//             <img src={country.flag} alt={country.name} />{' '}
//           </div>
//           <div>
//             <h1>{country.name}</h1>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       )
//     })
//   }

//   render() {
//     // Do not set your state in render method
//     console.log('render will be third to run')
//     return (
//       <div className='App'>
//         <h4>Ha~</h4>
//         <User firstName={this.state.firstName} />
//         <div className='countries-wrapper'>
//           {this.renderCountries()}
//         </div>
//       </div>
//     )
//   }
// }

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Adsdsff' />, rootElement)