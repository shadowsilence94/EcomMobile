import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const MobileMenu = ({ isSticky }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems, favoriteIds } = useContext(CartContext);
  const { theme } = useTheme();
  
  const totalItemCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className={`mobile-menu-container ${isSticky ? 'sticky-menu' : ''}`}>
      <div className="container">
        <ul className="mobile-menu-links">
          <li className="mobile-menu-item">
            <Link
              to="/"
              className={`mobile-menu-link ${pathname === "/" ? "active" : ""}`}
            >
              <i className="bi bi-grid"></i>
              <span>Products</span>
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link
              to="/cart"
              className={`mobile-menu-link ${pathname === "/cart" ? "active" : ""}`}
            >
              <i className="bi bi-cart"></i>
              <span>Cart</span>
              {totalItemCount > 0 && (
                <span className="badge bg-primary mobile-badge">{totalItemCount}</span>
              )}
            </Link>
          </li>
          <li className="mobile-menu-item">
            <Link
              to="/favorite"
              className={`mobile-menu-link ${pathname === "/favorite" ? "active" : ""}`}
            >
              <i className="bi bi-heart"></i>
              <span>Favorite</span>
              {favoriteIds.length > 0 && (
                <span className="badge bg-primary mobile-badge">
                  {favoriteIds.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;