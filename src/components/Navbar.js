import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header id='header-home'>
        <div className='container'>
          <nav id='main-nav'>
            <img
              src='../../../../../../img/logo.png'
              alt='My Portfolio'
              id='logo'
            />
            <ul>
              <li>
                <a
                  onclick={() => {
                    navigate.push('/')
                  }}
                  href='*'
                  className='current'></a>
                Home
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/about')
                  }}
                  href='*'></a>
                About
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/work')
                  }}
                  href='*'></a>
                Work
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate('/contact')
                  }}
                  href='*'></a>
                Contact
              </li>
            </ul>
          </nav>
          <div className='header-content'>
            <h1>
              I am Nolan The{' '}
              <span
                className='txt-type'
                data-wait='3000'
                data-words='["Designer", "UI/UX Dev"]'></span>
              <p className='lead'>I specialize in Graphic Design UI/UX</p>
              <a href='' className='lead'>
                View My Work
              </a>
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
