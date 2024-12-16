import React,{useEffect, useState} from 'react';
import './Myservices.css';

const MyServices = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive websites using modern technologies like React, HTML, CSS, and JavaScript.',
      icon: 'fas fa-code',
    },
    {
      title: 'Graphic Design',
      description: 'Creating visually stunning designs and graphics tailored to your brand identity.',
      icon: 'fas fa-paint-brush',
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring your website looks great and functions seamlessly on all devices.',
      icon: 'fas fa-mobile-alt',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces that provide a great user experience.',
      icon: 'fas fa-pencil-ruler',
    },
  ];

  return (
    <div className="my-services">
      <header className="services-header">
        <h1>My Services</h1>
        <p>I specialize in delivering high-quality solutions tailored to your needs.</p>
      </header>

      <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon">
            <i className={service.icon}></i>
            <h2>{service.title}</h2>
          </div>
          <p>{service.description}</p>
        </div>
      ))}
    </div>

    </div>
  );
};

export default MyServices;
