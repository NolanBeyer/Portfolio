import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='header-content'>
          <h1>
            I am Nolan The{' '}
            <span
              className='txt-type'
              data-wait='3000'
              data-words='["Designer", "UI/UX Dev"]'></span>
          </h1>
          <p className='lead'>I specialize in Graphic Design UI/UX</p>
          <a href='' className='btn-light'>
            View My Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
