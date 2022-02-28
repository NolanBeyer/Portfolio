import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <nav id='about-nav'>
        <img src='img/work.png' alt='My Portfolio' id='logo' />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/work'>Work</Link>
          </li>
          <li>
            <Link className='current' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* About Section-A */}

      <section id='about-a' className='text-center py-2'>
        <div className='container'>
          <h1 className='section-title'>About Me</h1>
          <div className='bottom-line'></div>
          <p className='lead'>
            Let me tell you a little about myself and what I do.
          </p>
          <div className='about-info'>
            <div>
              <img className='about-img' src='/img/me.jpg' alt='Me' />
            </div>
            <div className='bio bg-light py-4'>
              <h4>Your project is in safe hands</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                saepe fugit excepturi? Vitae fuga voluptatibus vel minima.
                Voluptatibus cum ad explicabo, soluta maxime saepe rerum
                corporis temporibus perspiciatis laborum tempore?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='about-b' className='text-center'>
        <div className='container'>
          <h1 className='about-b-title'>Technical Skills</h1>
          <div className='bottom-line'></div>
        </div>
        <div className='about-skills'>
          <div>
            <img className='skill-logos' src='/img/html.png' alt='html' />
          </div>
          <div>
            <img className='skill-logos' src='/img/css.png' alt='css' />
          </div>
          <div>
            <img className='skill-logos' src='/img/js.png' alt='javascript' />
          </div>
          <div>
            <img className='skill-logos' src='/img/react.png' alt='react' />
          </div>
          <div>
            <img className='skill-logos' src='/img/adobe.png' alt='adobe' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
