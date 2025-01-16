import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import localimg from './images/localimg.png'
import chatimg from './images/chatimg.png'
import playerimg from './images/playerimg.png'

function Projects() {

  const projects = [
    {
      id: 1,
      name: 'LocalFixers - Service provider website',
      description: 'LocalFixers is a dynamic platform designed to connect users with trusted local service providers. Whether you need a plumber, electrician, handyman, or other professionals, LocalFixers simplifies the search by offering a curated list of skilled experts in your area. With user-friendly features and reliable reviews, it ensures a seamless experience for finding and hiring the right professional for your needs.',
      image: localimg, 
      tech:'Django, python, html, css, javascript',
      url: 'https://vk11-localfixers.onrender.com/', 
    },
    {
      id: 2,
      name: 'AI Chat Application',
      description: 'Meet Gemini, an intelligent and responsive chatbot built with React, designed to deliver real-time assistance and personalized interactions. Powered by advanced AI capabilities, Gemini seamlessly integrates into websites and applications, offering intuitive conversations, answering queries, and providing support. Its sleek React-based UI ensures smooth performance and adaptability.',
      image: chatimg,
      tech:'Vite React, Gemini Api, css', 
      url: 'https://vk11-chatbot.netlify.app',
    },
    {
      id: 3,
      name: 'Music Player',
      description: 'This is a simple music player app built using React. It allows user to play music ads free. Just search and enjoy your favorite music. **Important** : To use this app you need to authorize your spotify account. Contact me for more details.',
      image: playerimg,
      tech:'Vite React, Spotify Api, css', 
      url: 'https://vk11-musicplayer.netlify.app',
    },
  ];

  return (
    <>
    <div className="section">
      <div className="projects-header"><span>Projects</span></div>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="img-container"><img src={project.image} alt={project.name} className="project-image" /></div>
            <div className="aboutproject">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <h5>Tools used: {project.tech} </h5>
              <a href={project.url} target='_blank'><span>!! Click me to visit !!</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Projects
