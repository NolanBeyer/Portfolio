import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <header id='header-inner'>
        <nav id='contact-nav'>
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

      {/* Contact-Section:A */}

      <section id='contact-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>Contact Me</h2>
          <div className='bottom-line'></div>
          <form
            method='POST'
            netlify-honeypot='bot-field'
            data-netlify='true'
            data-netlify-recaptcha='true'>
            <div className='text-fields'>
              <input
                type='text'
                className='text-input name-input'
                placeholder='Name'
                name='name'
              />
              <input
                type='text'
                className='text-input subject-input'
                placeholder='Subject'
                name='subject'
              />
              <input
                type='email'
                className='text-input email-input'
                placeholder='Email Address'
                name='email'
              />
              <input
                type='text'
                className='text-input phone-input'
                placeholder='Phone Number'
                name='phone'
              />
              <textarea
                className='text-input message-input'
                placeholder='Enter Message'
                name='message'></textarea>
              <div className='my-2'>
                <div data-netlify-recaptcha='true'></div>
              </div>
            </div>
            <button type='submit' className='btn-dark'>
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Section:B */}

      <section id='contact-b' className='text-center py-3 bg-dark'>
        <div className='container'>
          <div className='contact-info'>
            <div>
              <i className='fas fa-envelope fa-2x'></i>
              <h3>Email</h3>
              <p>nolanbeyer40@gmail.com</p>
            </div>
            <div>
              <i className='fas fa-phone fa-2x'></i>
              <h3>Phone</h3>
              <p>(541) 979-7040</p>
            </div>
            <div>
              <i className='fas fa-location-arrow fa-2x'></i>
              <h3>address</h3>
              <p>33648 Berry Dr NE Albany, Oregon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
