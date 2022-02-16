import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='home-content'>
        <div className='container'>
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

      {/* Section-A Specialize */}
      <section id='home-a' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>I Specialize In</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam,
            amet eius recusandae cum ducimus accusantium a neque similique
            temporibus?
          </p>
          <div className='specials'>
            <div className='py-2'>
              <i className='fas fa-file-alt fa-2x'></i>
              <h3>Concepting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fas fa-desktop fa-2x'></i>
              <h3>UI / UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fas fa-object-ungroup fa-2x'></i>
              <h3>Visual Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fas fa-thumbs-up fa-2x'></i>
              <h3>Visual Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
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
              <li className='stats-number'>100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-award fa-3x'></i>
              </li>
              <li className='stats-title'>Awards</li>
              <li className='stats-number'>3</li>
            </ul>
          </div>
          <div className='odds'>
            <ul>
              <li>
                <i className='fas fa-hourglass-start fa-3x'></i>
              </li>
              <li className='stats-title'>Hours Worked</li>
              <li className='stats-number'>3500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-code-branch fa-3x'></i>
              </li>
              <li className='stats-title'>Projects</li>
              <li className='stats-number'>135</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
