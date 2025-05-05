import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ data }) => {
  const { id, productName, productImage, price } = data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card">
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body text-center">
        <h5 className="card-title">
          <Link to={`/product/${id}`}>{productName}</Link>
        </h5>
        <p className="card-text">${price}</p>
        <button
          type="button"
          className="btn btn-outline-primary position-relative me-2"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={`btn btn-outline-primary position-relative ${
            favoriteId ? "text-danger" : ""
          }`}
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
