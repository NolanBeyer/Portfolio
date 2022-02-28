import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <header id='header-inner'>
        <nav id='main-nav'>
          <img src='img/work.png' alt='My Portfolio' id='logo' />
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link className='current' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Contact
