import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="container">
      <div className="cart-title">
        <h3>Your Cart Items</h3>
      </div>
      {cartItems.length === 0 ? (
        // Display message when cart is empty
        <div className="text-center mt-4">
          <p>Your cart is empty.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        // Display cart items and info when cart is not empty
        <div className="cart-list d-flex">
          <div
            className="cart-item d-flex flex-column gap-2"
            style={{ flexGrow: 1, marginRight: "20px" }}
          >
            {cartItems.map((item) => {
              const product = PRODUCTS.find(
                (product) => product.id === item.id
              );
              return (
                <CartItem data={product} qty={item.count} key={product.id} />
              );
            })}
          </div>
          <div className="cart-info d-flex flex-column gap-2">
            <div className="mb-2">
              <strong>Subtotal:</strong> ${totalAmount.toFixed(2)}
            </div>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
