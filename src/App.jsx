// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/product/Products";
import { Cart } from "./pages/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import { ProductDetail } from "./pages/product/ProductDetail";
import { Payment } from "./pages/payment/Payment";
import { CartContextProvider } from "./context/CartContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { AdminProducts } from "./pages/admin/AdminProducts";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLogout from "./pages/admin/AdminLogout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ThemeContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <div className="main-content flex-grow-1">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/favorite" element={<Favorite />} />
                
                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/logout" element={<AdminLogout />} />
                <Route path="/admin" element={<Navigate to="/admin/products" replace />} />
                <Route 
                  path="/admin/products" 
                  element={
                    <ProtectedRoute>
                      <AdminProducts />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </div>
            <Footer />
            <ScrollToTop />
          </Router>
        </CartContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;