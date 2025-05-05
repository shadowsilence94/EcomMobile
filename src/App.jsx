// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer component
import Products from "./pages/product/Products";
import { Cart } from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import { ProductDetail } from "./pages/product/ProductDetail";
import { Payment } from "./pages/payment/Payment";
import { CartContextProvider } from "./context/CartContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { AdminProducts } from "./pages/admin/AdminProducts";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ThemeContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <div className="main-content flex-grow-1">
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/admin" element={<AdminProducts />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </CartContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
