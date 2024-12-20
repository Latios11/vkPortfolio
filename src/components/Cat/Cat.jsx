import React, { useEffect } from 'react';
import './Cat.css';
import cat from './cat.png'

function Cat() {
  useEffect(() => {
    const eye = document.getElementById('eyes');
    if (!eye) return;

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Get the current position of the eye
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      // Calculate the direction to move
      const dx = mouseX - eyeCenterX;
      const dy = mouseY - eyeCenterY;

      // Move in the direction of the mouse
      const moveX = dx * 0.0037;
      const moveY = dy * 0.006;

      // Apply the movement
      eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    // Add mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <div>
      <div className="canvas">
        <div className="eyes" id="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="cat-img">
          <img src={cat} alt="Cat" />
        </div>
      </div>
    </div>
  );
}

export default Cat;
