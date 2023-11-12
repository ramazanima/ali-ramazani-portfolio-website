import React, { useState, useEffect } from 'react';

export const ButtonCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the visibility state
      setIsVisible(window.scrollY > 700);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <button className={`scroll-button ${isVisible ? 'visible' : 'hidden'}`}>
      asdsadsadsadsadsadasdsa
    </button>
  );
};