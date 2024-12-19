import React from 'react'
import './Cat.css'

function Cat() {
    const eye = document.querySelector('.eyes');

    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Get the current position of the eye
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      // Calculate the direction to move
      const dx = mouseX - eyeCenterX;
      const dy = mouseY - eyeCenterY;

      // Move 2px in the direction of the mouse
      const moveX = dx * 0.0037; // Adjust the movement strength (2% of the distance)
      const moveY = dy * 0.006;

      // Apply the movement
      eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
      
  return (
    <div>
      <div className="canvas">
        <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
        </div>
        <div className="cat-img"><img src='src\components\Cat\cat.png' alt="" /></div>
      </div>
    </div>
  )
}

export default Cat
