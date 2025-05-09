import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

export const FavoriteItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } = useContext(CartContext);
  const { theme } = useTheme();
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card product-card h-100" style={{ width: "18rem" }}>
      <div className="product-image-container">
        <img 
          src={productImage} 
          className="card-img-top product-image" 
          alt={productName} 
        />
      </div>
      <div className="card-body text-center d-flex flex-column">
        <h5 className="card-title mb-2">
          <Link 
            to={`/product/${id}`} 
            className="product-link"
            style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}
          >
            {productName}
          </Link>
        </h5>
        <p className="card-text price mb-3">${price.toFixed(2)}</p>
        <div className="mt-auto">
          <button
            type="button"
            className="btn btn-tech-primary position-relative me-2"
            onClick={() => addToCart(id)}
          >
            <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            {cartItem && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItem.count}
              </span>
            )}
          </button>
          <button
            type="button"
            className={`btn ${favoriteId ? "btn-danger" : "btn-outline-danger"} position-relative`}
            onClick={() => toggleFavorite(id)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};