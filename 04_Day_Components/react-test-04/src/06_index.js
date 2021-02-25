import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

const showDate = (time) => {
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
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  }
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// const Header = (props) => {
//   const data = props.data
//   const {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   } = data
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

const AlertBox = ({ type }) => (
  <div>
    <p>{type} alert</p>
  </div>
)

const Button = ({ onClick, text, style }) => (
  <button style={style} onClick={onClick}>{text}</button>
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

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

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

const heaxColor = () => {
  let str = '0123456789abcdef';
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return `#${color}`
}

const RandomBgDiv = ({ bgStr }) => (
  <div style={{ background: bgStr }}>{bgStr}</div>
)


const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)

const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} key={skill[0]} />)
  return (
    <ul>{skillsList}</ul>
  )
}

const Block = ({ text, style }) => {
  let _style = {
    display: 'inline-block',
    width: '100px',
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px',
    color: 'white',
    marginRight: '20px',
    marginBottom: '20px'
  }
  _style = Object.assign(_style, style)
  return (
    <span style={_style}>{text}</span>
  )
}

const isPrime = (num) => {
  // 不是数字或者数字小于2
  if (typeof num !== "number" || !Number.isInteger(num)) {　　　　　　// Number.isInterget 判断是否为整数
    return false;
  }

  //2是质数
  if (num === 2) {
    return true;
  } else if (num % 2 === 0) {  //排除偶数
    return false;
  }
  //依次判断是否能被奇数整除，最大循环为数值的开方
  var squareRoot = Math.sqrt(num);
  //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
  for (var i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const Blocks = () => {
  let emptyList = Array(32).fill(1)
  let blocks = emptyList.map((item, number) => {
    let style = {}
    if(isPrime(number) && number !== 1) {
      style.background = 'red'
    }else if(number % 2 === 0) {
      style.background = 'green'
    }else {
      style.background = 'yellow'
    }
    return (<Block text={number} key={number} style={style} />)
  })
  return (
    <div>{ blocks }</div>
  )
}

const ColorBlcks = () => {
  let emptyList = Array(32).fill(1)
  let blocks = emptyList.map((item, number) => {
    let color = heaxColor();
    let style = {
      background: color
    }
    
    return (<Block text={color} key={number} style={style} />)
  })
  return (
    <div>{ blocks }</div>
  )
}

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const barWrapStyle ={
  display: 'flex',
  alignItem: 'middle',
  justifyContent: 'center',
  width: '620px',
  height: '20px',
  marginBottom: '20px'
}
const countryStyle ={
  color: '#000',
  lineHeight: '20px',
  width: '180px'
}
const barStyle = {
  position: 'relative',
  width: '400px',
  marginRight: '20px'
}

let barMainStyle ={
  position: 'absolute',
  height: '100%',
  background: 'yellow',
  left: 0,
  top: 0
}

const populationStyle ={
  color: '#000',
  lineHeight: '20px',
  // width: '100px'
}

const Bar = ({ country, population, list }) => {
  let _style = {
    width: population / list[0].population * 100 + '%'
  }
  console.log(_style)
  _style = Object.assign(_style, barMainStyle)
  return (
    <li style={barWrapStyle}>
      <span style={countryStyle}>{ country }</span>
      <div style={barStyle}>
        <div style={_style}></div>
      </div>
      <span style={populationStyle}>{ population }</span>
    </li>
  )
}
const Bars = ({ list }) => {
  // list.sort((a, b) => b.population - a.population)
  const barList = list.map(({country, population}) => <Bar key={country} country={country} population={population} list={list} />)
  return (
    <ul>{ barList }</ul>
  )
}

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({ country: { name, city } }) => (
  <div>
    <h5>{name}</h5>
    <p>{city}</p>
  </div>
)

const Countries = ({ countries }) => {
  const countriesList = countries.map((country) => <Country country={country} key={country.name} />)
  return (
    <div>{countriesList}</div>
  )
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
      <AlertBox type="warning" />
      <AlertBox type="danger" />
      <RandomBgDiv bgStr={heaxColor()} />
      <RandomBgDiv bgStr={heaxColor()} />
      <RandomBgDiv bgStr={heaxColor()} />
      <RandomBgDiv bgStr={heaxColor()} />
      <Skills skills={skills} />
      <Countries countries={countries} />
      <Blocks />
      <ColorBlcks />
      <Bars list={tenHighestPopulation} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)