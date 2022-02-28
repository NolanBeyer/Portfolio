import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
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
              <Link className='current' to='/work'>
                Work
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Section: Work-A */}
      <section id='work-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>My Work</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Here are a few of my projects</p>
          <div className='items'>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item1.png' alt='item1' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Great Gradients</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item2.png' alt='item2' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>UI/ UX</p>
                  <h2 className='item-text-title'>World Experience</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item3.png' alt='item3' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Photography and Design</p>
                  <h2 className='item-text-title'>Vanishing</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item4.png' alt='item4' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Gap Ink</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item5.png' alt='item5' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Mobile UI Design</p>
                  <h2 className='item-text-title'>Face The Experience</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item6.png' alt='item6' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Design Concept</p>
                  <h2 className='item-text-title'>Bezier Curves</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item7.png' alt='item7' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Photography</p>
                  <h2 className='item-text-title'>Dock Ponder</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item8.png' alt='item8' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Web Applications</p>
                  <h2 className='item-text-title'>Restaurant App</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/items/item9.png' alt='item9' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Social Network Concept</p>
                  <h2 className='item-text-title'>Friend Feed</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
