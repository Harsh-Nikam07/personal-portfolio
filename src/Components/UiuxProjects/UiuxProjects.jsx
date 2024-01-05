import React from 'react'
import './UiuxProjects.css'

import project1 from '../../assets/img/project1.png'
import project2 from '../../assets/img/project2.png'
import project3 from '../../assets/img/project3.png'

const UiuxProjects = () => {
  return (
    <>
      <div className="container">
        <h2>UI/UX PROJECTS</h2>
        <div className='project-1'>
          <div className='project1-left-section'>
            <div className="project1-project-title">EDUCATIONAL WEBSITE</div>
            <div className='project1-project-desc'>A simple, responsive portfolio website showcasing my skills and projects.</div>
            <div className='project1-project-link-btn'><button>SEE PROJECT</button></div>
          </div>
          <div className="project1-right-section">
            <img src={project1} alt="" />
          </div>
        </div>


        <div className='project-1'>

          <div className="project1-right-section">
            <img src={project2} alt="" />
          </div>
          <div className='project1-left-section'>
            <div className="project1-project-title">PERSONAL PORTFOLIO</div>
            <div className='project1-project-desc'>A simple, responsive portfolio website showcasing my skills and projects.</div>
            <div className='project1-project-link-btn'><button>SEE PROJECT</button></div>
          </div>
        </div>

        <div className='project-1'>
          <div className='project1-left-section'>
            <div className="project1-project-title">E-COMMERCE WEB APP</div>
            <div className='project1-project-desc'>A simple, responsive portfolio website showcasing my skills and projects.</div>
            <div className='project1-project-link-btn'><button>SEE PROJECT</button></div>
          </div>
          <div className="project1-right-section">
            <img src={project3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default UiuxProjects