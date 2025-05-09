import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(0, 112, 243, 0.8)' : 'rgba(0, 112, 243, 0.9)'
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;