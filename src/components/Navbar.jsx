import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import sun and moon icons

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
      className={`navbar navbar-expand-lg w-100 vw-100 ${
        theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
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
        <Link to="/" className="navbar-brand">
          Htut Gadget Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={"nav-link " + (pathname === "/" && "active")}
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={"nav-link " + (pathname === "/cart" && "active")}
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-secondary">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorite"
                className={"nav-link " + (pathname === "/favorite" && "active")}
              >
                Favorite{" "}
                {favoriteIds.length > 0 && (
                  <span className="badge bg-secondary">
                    {favoriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          {/* Theme Toggle Button with Icon */}
          <div className="ms-auto">
            <button
              className="btn btn-outline-primary"
              onClick={toggleTheme}
              // Optional: Add an aria-label for accessibility
              aria-label={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              {/* Conditionally render sun or moon icon */}
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
