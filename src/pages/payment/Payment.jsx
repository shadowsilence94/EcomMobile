import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMoneyBill, faWallet } from "@fortawesome/free-solid-svg-icons";

export const Payment = () => {
  const { cartItems, getTotalAmount, clearCart } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Redirect to products if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0 && !isCompleted) {
      navigate("/");
    }
  }, [cartItems, navigate, isCompleted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      clearCart(); // Clear the cart after successful payment
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="container py-5">
        <div className="card p-5 text-center">
          <div className="mb-4">
            <i className="fas fa-check-circle text-success" style={{ fontSize: "4rem" }}></i>
          </div>
          <h2 className="mb-4">Payment Successful!</h2>
          <p className="mb-4">Thank you for your purchase. Your order has been processed successfully.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Checkout</h2>
      
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Payment Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h6 className="mb-3">Contact Information</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="mb-3">Shipping Address</h6>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="zip" className="form-label">ZIP Code</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="zip" 
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="mb-3">Payment Method</h6>
                  <div className="d-flex gap-3 mb-3">
                    <div 
                      className={`payment-option p-3 border rounded ${paymentMethod === 'credit' ? 'border-primary' : ''}`}
                      onClick={() => handlePaymentMethodChange('credit')}
                      style={{ cursor: 'pointer', flex: '1' }}
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                        <div>
                          <strong>Credit Card</strong>
                          <div className="small text-muted">Visa, Mastercard, Amex</div>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`payment-option p-3 border rounded ${paymentMethod === 'paypal' ? 'border-primary' : ''}`}
                      onClick={() => handlePaymentMethodChange('paypal')}
                      style={{ cursor: 'pointer', flex: '1' }}
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faWallet} className="me-2" />
                        <div>
                          <strong>PayPal</strong>
                          <div className="small text-muted">Pay with your PayPal account</div>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`payment-option p-3 border rounded ${paymentMethod === 'cash' ? 'border-primary' : ''}`}
                      onClick={() => handlePaymentMethodChange('cash')}
                      style={{ cursor: 'pointer', flex: '1' }}
                    >
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faMoneyBill} className="me-2" />
                        <div>
                          <strong>Cash on Delivery</strong>
                          <div className="small text-muted">Pay when you receive</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {paymentMethod === 'credit' && (
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="cardNumber" 
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cardExpiry" className="form-label">Expiration Date</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="cardExpiry" 
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cardCvv" className="form-label">CVV</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="cardCvv" 
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required 
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/cart')}
                  >
                    Back to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Items ({cartItems.reduce((sum, item) => sum + item.count, 0)}):</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>${(totalAmount * 0.1).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-0">
                <strong>Total:</strong>
                <strong>${(totalAmount * 1.1).toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};