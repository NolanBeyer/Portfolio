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
          <div className='about-info'>
            <div>
              <img className='about-img' src='/img/me.jpg' alt='Me' />
            </div>
            <div className='bio bg-light py-4'>
              <h4>Bio</h4>
              <p>
                I've always been really interested in technology, but never
                thought about a career in web development until after I suffered
                a SCI back in 2016. I started doing some research and just
                trying to learn some of the basics in HTML and CSS in late 2019.
                I've spent countless hours over the last two years learning /
                teaching myself. Although I still have a ways to go I'm really
                excited for this next step and am willing to learn additional
                technologies to fit the needs of future employers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
