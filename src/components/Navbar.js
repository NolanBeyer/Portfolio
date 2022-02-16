import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header id='header-home'>
        <nav id='main-nav'>
          <img src='img/logo.png' alt='My Portfolio' id='logo' />
          <ul>
            <li>
              <Link to='/' className='current'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
