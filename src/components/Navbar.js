import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='container'>
        <header id='header-home'>
          <nav id='main-nav'>
            <img src='' alt='My Portfolio' id='logo' />
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
      </div>
    </div>
  )
}

export default Navbar
