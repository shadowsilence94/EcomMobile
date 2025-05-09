import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const { theme } = useTheme();
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-4">
      <div className="cart-title mb-4">
        <h2 style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Your Cart Items</h2>
      </div>
      {cartItems.length === 0 ? (
        // Display message when cart is empty
        <div className="text-center mt-4 py-5">
          <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#666' }}>Your cart is empty.</p>
          <button className="btn btn-tech-primary mt-3" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        // Display cart items and info when cart is not empty
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="cart-items d-flex flex-column gap-3">
              {cartItems.map((item) => {
                const product = PRODUCTS.find(
                  (product) => product.id === item.id
                );
                return (
                  <CartItem data={product} qty={item.count} key={product.id} />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card cart-summary">
              <div className="card-body">
                <h5 className="card-title mb-4" style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Order Summary</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: theme === 'dark' ? '#e0e0e0' : '#666' }}>Subtotal:</span>
                  <span className="price">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: theme === 'dark' ? '#e0e0e0' : '#666' }}>Shipping:</span>
                  <span style={{ color: theme === 'dark' ? '#e0e0e0' : '#666' }}>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Total:</strong>
                  <strong className="price">${totalAmount.toFixed(2)}</strong>
                </div>
                <button className="btn btn-tech-primary w-100 mb-2" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};