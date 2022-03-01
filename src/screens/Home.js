import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className='container'>
          <h1>Nolan Beyer</h1>
          <h2>Frontend Engineer</h2>
          <h3>Graphic Designer</h3>
          <button
            onClick={() => {
              navigate('/work')
            }}
            href='*'
            className='btn-light'>
            View My Work
          </button>
        </div>
      </div>

      {/* Section-A Specialize */}
      <section id='home-a' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>I Specialize In</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            HTML, CSS, SCSS, JavaScript, React, MongoDB, FireBase, Adobe
            Illustrator.
          </p>
          <div className='specials'>
            <div className='py-2'>
              <i className='fab fa-html5 fa-2x'></i>
              <h3>HTML</h3>
              <p>
                Two years of experience in HTML5 using tags such as. divs,
                sections, headers, footers, links, forms, inputs id's classes,
                meta tags and more.
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-css3 fa-2x'></i>
              <h3>CSS/SCSS</h3>
              <p>
                Two years of experience with css with strong knowledge of css
                grid, flex box, position properties, overlays. SCSS nesting,
                variables, partials, functions, mixins and more.
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-js-square fa-2x'></i>
              <h3>JavaScript</h3>
              <p>
                Two years of experience with JavaScript es6. With knowledge in
                let vs const, scope, arrow functions, strings, booleans,
                template literals, destructuring, spread operator etc.
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-react fa-2x'></i>
              <h3>React</h3>
              <p>
                Nearly two years of experience with knowledge in react router,
                functional components, useNavigate, Link, redux, hooks, and
                lifecycle methods.
              </p>
            </div>
            <div className='py-2'>
              <i className='fas fa-eye-dropper fa-2x'></i>
              <h3>Adobe Illustrator</h3>
              <p>
                Three years of experience with adobe illustrator designing and
                creating graphic kits for dirtbikes, helmets, logos for various
                business's, vectorizing images, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Stats */}

      <section id='home-b' className='text-center'>
        <div className='stats'>
          <div className='odds'>
            <ul>
              <li>
                <i className='fas fa-users fa-3x'></i>
              </li>
              <li className='stats-title'>Clients</li>
              <li className='stats-number'>68</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-graduation-cap fa-3x'></i>
              </li>
              <li className='stats-title'>Certificates</li>
              <li className='stats-number'>4</li>
            </ul>
          </div>
          <div className='odds'>
            <ul>
              <li>
                <i className='fas fa-hourglass-end fa-3x'></i>
              </li>
              <li className='stats-title'>Hours Worked</li>
              <li className='stats-number'>5,000</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-code-branch fa-3x'></i>
              </li>
              <li className='stats-title'>Projects</li>
              <li className='stats-number'>76</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section C: Process */}

      <section id='home-c' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>My Creative Process</h2>
          <div className='bottom-line'></div>
          <div className='process'>
            <div>
              <i className='fas fa-file-alt fa-4x process-icon my-2'></i>
              <h3>Discuss the project</h3>
              <p>
                Talk to the client about a look they're after. Get some ideas
                for logos / color schemes.
              </p>
            </div>
            <div>
              <i className='fas fa-desktop fa-4x process-icon my-2'></i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                I like to go to awwwards.com and checkout several different
                sites and kinda take bits and pieces from them all to create
                something of my own.
              </p>
            </div>
            <div>
              <i className='fas fa-object-ungroup fa-4x process-icon my-2'></i>
              <h3>UI / UX Planning</h3>
              <p>
                After I kinda have a vision in my head. I use figma to do some
                wire framing and quickly get an outlook of what I'm after.
              </p>
            </div>
            <div>
              <i className='fas fa-thumbs-up fa-4x process-icon my-2'></i>
              <h3>Interaction</h3>
              <p>
                At this point I'm communicating with the client a lot. Sending
                proofs back and forth until we get a product we're both
                satisfied with.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
