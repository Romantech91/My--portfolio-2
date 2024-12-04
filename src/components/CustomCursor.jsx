import React, { useEffect } from 'react';
//import "./index.css" from ; // Ensure this file has the .custom-cursor styles

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (event) => {
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default CustomCursor;
