import React from 'react';
import ReactDOM from 'react-dom';
import asabenehImage from './images/asabeneh.jpg'
import jsLogoImage from './images/js_logo.png'
import htmlLogoImage from './images/html_logo.png'
import cssLogoImage from './images/css_logo.png'

// To get the root element from the HTML document
const rootElement = document.querySelector('#root')
// JSX element, header
const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

const buttonStyle = {
  padding: '10px 20px',
  background: 'gray',
  border: 'none',
  borderRadius: 5
}

const dangerButtonStyle = {
  padding: '10px 20px',
  background: 'red',
  border: 'none',
  borderRadius: 5
}
const heaxColor = () => {
  let str = '0123456789abcdef';
  let color = ''
  for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return `#${color}`
}

const HeaxColor = () => <div>{ heaxColor() }</div>
const RandomBgDiv = (props) => (
  <div style={{background: props.bgStr}}>{ props.bgStr }</div>
)


const DangerButton = () => <button style={ dangerButtonStyle }> danger </button>
const Button = () => <button style={ buttonStyle }> action </button>

const InputFile = () => <input placeholder="Input here" />

const AlertBox = (props) => (
  <div>
    <p>{ props.type } alert</p>
  </div>
)

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const LogoList = () => (
  <ul>
    <li><img src={htmlLogoImage} alt='img' /></li>
    <li><img src={cssLogoImage} alt='img' /></li>
    <li><img src={jsLogoImage} alt='img' /></li>
  </ul>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh' />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
    <DangerButton />
    <Button />
    <InputFile />
    <HeaxColor />
    <AlertBox type="warning" />
    <AlertBox type="danger" />
    <LogoList />
    <RandomBgDiv bgStr={heaxColor()} />
    <RandomBgDiv bgStr={heaxColor()} />
    <RandomBgDiv bgStr={heaxColor()} />
    <RandomBgDiv bgStr={heaxColor()} />
  </div>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
)

const copyRight = '2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)