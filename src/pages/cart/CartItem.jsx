import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const qty = props.qty;
  const { addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);
  const { theme } = useTheme();

  return (
    <div className="card mb-3 cart-item-card" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <div className="cart-item-image-container">
            <img
              src={productImage}
              className="img-fluid rounded-start cart-item-image"
              alt={productName}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Link 
                to={`/product/${id}`} 
                className="product-link"
                style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}
              >
                {productName}
              </Link>
            </h5>
            <p className="card-text price">${price.toFixed(2)}</p>
            <div className="card-text">
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => removeFromCart(id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={qty}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                  style={{ 
                    backgroundColor: theme === 'dark' ? '#333' : '#fff',
                    color: theme === 'dark' ? '#f0f0f0' : '#212529'
                  }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => addToCart(id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};