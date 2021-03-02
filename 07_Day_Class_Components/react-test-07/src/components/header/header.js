import React, { Component } from 'react'
import headerStyle from '../../styles/header.module.scss'

const { header, headerWrapper } = headerStyle

// const Header = (props) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   )
// }

class Header extends Component {
  render () {
    console.log(headerStyle, header, headerWrapper)
    return (
      <header className={header}>
        <div className={headerWrapper}>
          <h1>welcome</h1>
          {/* <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small> */}
        </div>
      </header>
    )
  }
}

export default Header