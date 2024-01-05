import React from 'react'
import './WebProjects.css'

import project1 from '../../assets/img/project1.png'
import project2 from '../../assets/img/project2.png'
import project3 from '../../assets/img/project3.png'

const WebProjects = () => {
  return (
    <>
      <div className="container" id='projects'>
        <h2>WEB PROJECTS</h2>
        <div className='project-1'>
          <div className='project1-left-section'>
            <div className="project1-project-title">EDUCATIONAL WEBSITE</div>
            <div className='project1-project-desc'>An Educational Website containing several pages with a responsive design across different devices</div>
            <div className='project1-project-link-btn'><a href='https://harsh-nikam07.github.io/EDUWEB-E-learning-website/'><button>SEE PROJECT</button></a></div>
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

export default WebProjects