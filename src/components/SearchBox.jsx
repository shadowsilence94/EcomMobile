import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from './MobileMenu';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll event listener to detect when to make the search box sticky
  useEffect(() => {
    const handleScroll = () => {
      // Make the search box sticky after scrolling down 100px
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu that appears above the search box when toggled */}
      {mobileMenuOpen && <MobileMenu isSticky={isSticky} />}
      
      <div className={`search-box-container ${isSticky ? 'sticky-search' : ''}`}>
        <div className="search-box mb-4">
          <div className="d-flex align-items-center position-relative">
            <div className="rounded-search flex-grow-1">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: '50px', zIndex: '0' }}
              />
              {searchTerm && (
                <button 
                  className="btn btn-outline-secondary rounded-circle clear-btn"
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{ 
                    position: 'absolute', 
                    right: '8px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    zIndex: '1',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0'
                  }}
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>
            
            {/* Menu toggle button for mobile - only visible on small screens */}
            <button
              className="d-lg-none mobile-menu-toggle ms-2"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;