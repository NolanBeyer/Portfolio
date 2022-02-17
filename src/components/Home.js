import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='home-content'>
        <div className='container'>
          <h1>Nolan Beyer</h1>
          <h2>Frontend Engineer</h2>
          <p className='lead'>Web & Graphic Designer</p>
          <a href='*' className='btn-light'>
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
            HTML, CSS, SCSS, JavaScript, React, Redux, MongoDB, FireBase, Adobe
            Illustrator.
          </p>
          <div className='specials'>
            <div className='py-2'>
              <i className='fab fa-html5 fa-2x'></i>
              <h3>HTML</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-css3 fa-2x'></i>
              <h3>CSS/SCSS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-js-square fa-2x'></i>
              <h3>JavaScript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fab fa-react fa-2x'></i>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus, quaerat molestiae suscipit doloribus sint
                enim sapiente vero facere quibusdam? Ea quaerat molestias ullam
                sint ratione, beatae id mollitia ducimus!
              </p>
            </div>
            <div className='py-2'>
              <i className='fas fa-eye-dropper fa-2x'></i>
              <h3>Adobe Illustrator</h3>
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

      {/* Section C: Process */}

      <section id='home-c' className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>My Creative Process</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            All of my UI / UX designs are based off a practiced formula to get
            the result I am looking for.
          </p>
          <div className='process'>
            <div>
              <i className='fas fa-file-alt fa-4x process-icon my-2'></i>
              <h3>Discuss the project</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam illo iure corporis eligendi ut repellat.
              </p>
            </div>
            <div>
              <i className='fas fa-desktop fa-4x process-icon my-2'></i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam illo iure corporis eligendi ut repellat.
              </p>
            </div>
            <div>
              <i className='fas fa-object-ungroup fa-4x process-icon my-2'></i>
              <h3>UI / UX Planning</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam illo iure corporis eligendi ut repellat.
              </p>
            </div>
            <div>
              <i className='fas fa-thumbs-up fa-4x process-icon my-2'></i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam illo iure corporis eligendi ut repellat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
