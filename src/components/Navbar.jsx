import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Navbar = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-tech w-100 vw-100 ${
        theme === "light" ? "navbar-light" : "navbar-dark"
      }`}
      style={{
        width: "100vw",
        maxWidth: "100vw",
        margin: "0",
        left: "0",
        right: "0",
      }}
    >
      <div className="container-fluid px-3 w-100">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src="/icon.png" 
            alt="Htut's Gadget Shop Logo" 
            className="navbar-logo me-2"
            style={{
              height: "32px",
              width: "auto",
              borderRadius: "6px"
            }}
          />
          <span className="text-gradient">Htut's Gadget Shop</span>
        </Link>
        
        {/* Theme Toggle Button for mobile - visible only on small screens */}
        <div className="d-flex align-items-center d-lg-none">
          <button
            className="btn btn-tech-outline btn-sm me-2 theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"
            }
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={`nav-link ${pathname === "/cart" ? "active" : ""}`}
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-primary">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorite"
                className={`nav-link ${pathname === "/favorite" ? "active" : ""}`}
              >
                Favorite{" "}
                {favoriteIds.length > 0 && (
                  <span className="badge bg-primary">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          
          {/* Theme Toggle Button for desktop - visible only on large screens */}
          <div className="ms-auto d-none d-lg-block">
            <button
              className="btn btn-tech-outline"
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;