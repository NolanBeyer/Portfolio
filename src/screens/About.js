import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <nav id='about-nav'>
        <img src='img/bitmoji.png' alt='My Portfolio' id='logo' />
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
          <div className='about-info'>
            <div>
              <img className='about-img' src='/img/me.jpg' alt='Me' />
            </div>
            <div className='bio bg-medium py-4'>
              <h4>Bio</h4>
              <p>
                I've always been really interested in technology, but never
                thought about a career in web development until after I suffered
                a SCI in 2016. I started doing some research and just trying to
                learn some of the basics of HTML and CSS in late 2019. I've
                spent countless hours over the last two years learning /
                teaching myself these languages. I feel like now I am more than
                ready for a frontend position and am willing to learn additional
                technologies to fit the needs of future employers.
              </p>
            </div>
            <div className='award-1 py-4'>
              <i className='fas fa-user-graduate fa-3x'></i>
              <h3>DevMtn Graduate</h3>
              <p>
                Full-Stack Web Development Fully Remote Immersive Coding Course
              </p>
            </div>
            <div className='award-2 py-4'>
              <i class='fas fa-graduation-cap fa-3x'></i>{' '}
              <h3>MERN Ecommnerce</h3>
              <p>
                Full stack Ecommerce site with authentication. Built with
                MongoDB, Express, React, and Node.
              </p>
            </div>
            <div className='award-3 py-4'>
              <i class='fas fa-certificate fa-3x'></i>
              <h3>Web Developer Bootcamp</h3>
              <p>
                Full stack online bootcamp. Learning HTML, CSS, JavaScript,
                express, node, etc...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
