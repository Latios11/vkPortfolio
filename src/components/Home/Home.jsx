import React from 'react'
import "./Home.css"
import MyServices from './MyServices'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faGraduationCap, faBomb, faC, faPhotoFilm} from '@fortawesome/free-solid-svg-icons'
import { faPython, faReact, faJs, faCss3Alt, faHtml5, faFigma, faGithub,  } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
    <div className='hero'>
        <div className="hero-content">
          <div className="hero-header">
            I am <span>Vivek kumar</span>,<br/> 
            <span>Front end</span> Developer.
          </div>
          <div className="hero-container">
           <img src="https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
        <div className="hero-para">
           I’m a passionate Front-End Developer dedicated to 
            creating dynamic and responsive web experiences. 
            With a keen eye for design and a deep understanding of 
            modern technologies, I bring ideas to life through clean, 
            efficient code and thoughtful user interfaces. <br/><br/>Whether you're 
            looking for a sleek website, a vibrant application, or a unique 
            solution tailored to your needs, I’m here to help. 

            Explore my work and discover how we can collaborate to elevate your digital presence!
          </div>
          <NavLink to="/contact"><button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Hire Me</span>
            </span>
          </button></NavLink>
    </div>
    
    <div className="intro">
    <div className="education">
      <h1 className='edu-header'>Education</h1>
      <div className="edu-content">
        
        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Master of Computer Applications</div>
              <div className="duration"><FontAwesomeIcon icon={faGraduationCap}/> 2022 - 2024</div>
          </div>
          <div className="edu-loc">
          <FontAwesomeIcon icon={faSchool}/> Univerity of Allahabad
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Bachelor of Science</div>
              <div className="duration"><FontAwesomeIcon icon={faGraduationCap}/> 2019 - 2022</div>
          </div>
          <div className="edu-loc">
          <FontAwesomeIcon icon={faSchool}/> Veer Bahadur Singh Purvanchal University
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Intermediate</div>
              <div className="duration"><FontAwesomeIcon icon={faGraduationCap}/> 2017 - 2018</div>
          </div>
          <div className="edu-loc">
          <FontAwesomeIcon icon={faSchool}/> Kendriya Vidyalaya No. 2
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Highschool</div>
              <div className="duration"><FontAwesomeIcon icon={faGraduationCap}/> 2015 - 2016</div>
          </div>
          <div className="edu-loc">
          <FontAwesomeIcon icon={faSchool}/> Kendriya Vidyalaya No. 2
          </div>
        </div>
      </div> 
    </div>
    
    <div className="skills">
      <div className="skill-header"><span>My Skills</span></div>
      <div className="technology">
        <span><FontAwesomeIcon icon={faBomb}/> Web Devolopment tools</span>
        <div className="skill-list">
          <div className="skill"><span>Html</span><br/><FontAwesomeIcon className='skill-icon' icon={faHtml5} /></div>
          <div className="skill"><span>CSS</span><br/><FontAwesomeIcon className='skill-icon' icon={faCss3Alt} /></div>
          <div className="skill"><span>Javascript</span><br/><FontAwesomeIcon className='skill-icon' icon={faJs} /></div>
          <div className="skill"><span>React</span><br/><FontAwesomeIcon className='skill-icon' icon={faReact} /></div>
          <div className="skill"><span>Django</span><br/><FontAwesomeIcon className='skill-icon' icon={faPython} /></div>
        </div>
      </div>
      <div className="technology">
        <span><FontAwesomeIcon icon={faBomb}/>Programming languages</span>
        <div className="skill-list">
          <div className="skill"><span>Python</span><br/><FontAwesomeIcon className='skill-icon' icon={faPython}/></div>
          <div className="skill"><span>C/C++</span><br/><FontAwesomeIcon className='skill-icon' icon={faC} /></div>
          <div className="skill"><span>C#</span><br/><FontAwesomeIcon className='skill-icon' icon={faC}/></div>
        </div>
      </div>
      <div className="technology">
        <span><FontAwesomeIcon icon={faBomb}/>Others</span>
        <div className="skill-list">
          <div className="skill"><span>Photoshop</span><br/><FontAwesomeIcon className='skill-icon' icon={faPhotoFilm} /></div>
          <div className="skill"><span>Figma</span><br/><FontAwesomeIcon className='skill-icon' icon={faFigma}/></div>
          <div className="skill"><span>Github</span><br/><FontAwesomeIcon className='skill-icon' icon={faGithub} /></div>
        </div>
      </div>
    </div>
     
    </div>

    
    {true &&<MyServices/>}
    
  </>
  )
}

export default Home
