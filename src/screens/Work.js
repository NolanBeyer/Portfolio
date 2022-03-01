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
                <img
                  src='https://media.istockphoto.com/photos/investment-business-report-picture-id1286971516?b=1&k=20&m=1286971516&s=170667a&w=0&h=t3XYTkHV4DDzYIC_peiKO7uD5Bmvjc7rcQIC9X13ZYw='
                  alt='item1'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://nolanbeyer.github.io/Edge-Ledger/'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>Edge Ledger</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img
                  src='https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
                  alt='item2'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://nolanbeyer.github.io/Hotel-Site/'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>Hotel BT</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img
                  src='https://media.istockphoto.com/photos/online-shopping-and-fashion-store-website-with-add-to-cart-button-in-picture-id1287186681?b=1&k=20&m=1287186681&s=170667a&w=0&h=OQr0VJzocP4FxkzO1PwbdZD63nkOEQHIE4M3Lncdw6Y='
                  alt='item3'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://proshopapp127.herokuapp.com/'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>ProShop</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img
                  src='https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  alt='item4'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://face-id.dev/#/'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>Face Rec</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img
                  src='https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='item5'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://github.com/NolanBeyer/Firegram'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>FireGram</h2>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='item-image'>
                <img
                  src='https://media.istockphoto.com/photos/lots-of-photograph-collections-in-one-image-picture-id155388009?b=1&k=20&m=155388009&s=170667a&w=0&h=9ViUIIQJvYIbRRb1iP2z8seywph8lQCNKn3dVh2ZpsY='
                  alt='item6'
                />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <a
                    href='https://github.com/NolanBeyer/Photo-Wall'
                    className='item-text-category'>
                    view
                  </a>
                  <h2 className='item-text-title'>PhotoWall</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/star.jpg' alt='star' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Graphic Design</p>
                  <h2 className='item-text-title'>Factory Yamaha</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/honda.jpg' alt='honda' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Graphic Design</p>
                  <h2 className='item-text-title'>Honda Kit</h2>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='item-image'>
                <img src='/img/yamaha.jpg' alt='yamaha' />
              </div>
              <div className='item-text'>
                <div className='item-text-wrap'>
                  <p className='item-text-category'>Graphic Design</p>
                  <h2 className='item-text-title'>Yamaha Kit</h2>
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
