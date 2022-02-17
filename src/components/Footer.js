import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id='main-footer'>
        <div className='footer-content container'>
          <p>Copyright &copy; 2022. All rights reserved.</p>
          <div className='social'>
            <a
              href='https://github.com/NolanBeyer'
              className='fab fa-github'></a>
            <a
              href='https://www.linkedin.com/in/nolan-beyer-5252731b1/'
              className='fab fa-linkedin'></a>
            <a href='https://www.facebook.com/' className='fab fa-facebook'></a>
            <a
              href='https://www.instagram.com/nb127_/'
              className='fab fa-instagram'></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
