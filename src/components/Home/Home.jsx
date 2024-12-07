import React from 'react'
import "./Home.css"

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
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Hire Me</span>
            </span>
          </button>
    </div>
    
    <div className="education">
      <h1 className='edu-header'>Education</h1>

      <div className="edu-content">
        
        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Master of Computer Applications</div>
              <div className="duration"><i class="fa-solid fa-graduation-cap"></i> 2022 - 2024</div>
          </div>
          <div className="edu-loc">
          <i class="fa-solid fa-school"></i> Univerity of Allahabad
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Bachelor of Science</div>
              <div className="duration"><i class="fa-solid fa-graduation-cap"></i> 2019 - 2022</div>
          </div>
          <div className="edu-loc">
          <i class="fa-solid fa-school"></i> Veer Bahadur Singh Purvanchal University
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Intermediate</div>
              <div className="duration"><i class="fa-solid fa-graduation-cap"></i> 2017 - 2018</div>
          </div>
          <div className="edu-loc">
          <i class="fa-solid fa-school"></i> Kendriya Vidyalaya No. 2
          </div>
        </div>

        <div className="edu">
          <div className="edu-course">
              <div className="edu-degree">Highschool</div>
              <div className="duration"><i class="fa-solid fa-graduation-cap"></i> 2015 - 2016</div>
          </div>
          <div className="edu-loc">
          <i class="fa-solid fa-school"></i> Kendriya Vidyalaya No. 2
          </div>
        </div>

      </div>
      
    </div>
  </>
  )
}

export default Home
