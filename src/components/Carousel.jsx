import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ items, autoPlay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content">
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          className="carousel-image"
        />
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &gt;
      </button>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
