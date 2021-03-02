import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    country: '',
    title: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }

  render () {
    const { firstName, lastName, country, title } = this.state

    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input 
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input 
              type='text'
              name='country'
              placeholder='country'
              value={country}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input 
              type='text'
              name='title'
              placeholder='title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    )
  }
}

// class App extends Component {
//   // declaring state
//   // initial state
//   state = {
//     firstName: '',
//   }
//   handleChange = (e) => {
//     const value = e.target.value
//     this.setState({ firstName: value })
//   }

//   render() {
//     /*
//      accessing the state value and 
//      this value will injected to the input in the value attribute
//      */

//     const firstName = this.state.firstName
//     return (
//       <div className='App'>
//         <label htmlFor='firstName'>First Name: </label>
//         <input
//           type='text'
//           id='firstName'
//           name='firstName'
//           placeholder='First Name'
//           value={firstName}
//           onChange={this.handleChange}
//         />
//         <h1>{this.state.firstName}</h1>
//       </div>
//     )
//   }
// }

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)