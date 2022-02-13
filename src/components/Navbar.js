import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header id='header-home'>
        <div className='container'>
          <nav id='main-nav'>
            <img src='' alt='My Portfolio' id='logo' />
            <ul>
              <li>
                <a
                  onclick={() => {
                    navigate('/')
                  }}
                  href='*'
                  className='current'>
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/about')
                  }}
                  href='*'>
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/work')
                  }}
                  href='*'>
                  Work
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/contact')
                  }}
                  href='*'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
