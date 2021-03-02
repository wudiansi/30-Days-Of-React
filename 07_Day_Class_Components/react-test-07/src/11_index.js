import React, { Component } from 'react'
import ReactDom from 'react-dom'

const hoverWrapStyle = {
  position: 'relative',
  width: '800px',
  height: '800px',
  background: 'white',
  boxSizing: 'border-box',
  border: '1px solid #000'
}

const hoverStyle = {
  position: 'absolute',
  zIndex: '999',
  width: '200px',
  height: '100px',
  background: 'yellow',
  lineHeight: '100px'
}

const RandomGem = (state) => {
  let randoms = (max) => {
    return Math.floor(Math.random() * max)
  }
  let _left = randoms(600)
  let _top = randoms(700)

  return {
    left: _left,
    top: _top
  }
}

class App extends Component {
  state = {
    firstName: '',
    message: '',
    key: '',
    left: 200,
    top: 200
  }

  handleClick = (e) => {
    this.setState({
      message: 'Welcome to the world of events!'
    })
  }

  handleMouseMove = (e) => {
    this.setState({ message: 'mouse is moving!' })
  }

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value
    })
  }

  handleKeyPress = (e) => {
    this.setState({
      message: `${e.key} has been pressed and the keycode is ${e.charCode}`
    })
  }

  handleBlur = (e) => {
    this.setState({ message: 'Input filed has been blured!' })
  }

  handleCopy = (e) => {
    this.setState({ message: 'not allowed' })
  }

  handleMouseMoved = (e) => {
    let { left, top } = RandomGem(this.state)
    this.setState({
      left, top
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome!~</h1>

        <button onClick={this.handleClick} >Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse to me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>
        <p>{this.state.message}</p>

        <label htmlFor=''>Test for onKeyPress Event</label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''>Test for onBlur Event</label>
        <input type="text" onBlur={this.handleBlur} />
        <br />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <div style={hoverWrapStyle}>
          <div style={{ ...hoverStyle, left: this.state.left + 'px', top: this.state.top + 'px' }} onMouseMove={this.handleMouseMoved}>Hover Me</div>
        </div>

      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)