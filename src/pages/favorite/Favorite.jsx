import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { PRODUCTS } from "../../products";
import { FavoriteItem } from "./FavoriteItem";
import { useNavigate } from "react-router-dom";

export const Favorite = () => {
  const { favoriteIds } = useContext(CartContext);
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <div className="favorite-title mb-4">
        <h2 style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Favorite Items</h2>
      </div>
      {favoriteIds.length === 0 ? (
        // Display message when favorite list is empty
        <div className="text-center mt-4 py-5">
          <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#666' }}>Your favorite list is empty.</p>
          <button className="btn btn-tech-primary mt-3" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        // Display favorite items when list is not empty
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {favoriteIds.map((fid) => {
            const product = PRODUCTS.find((product) => product.id === fid);
            return (
              <div className="col" key={fid}>
                <FavoriteItem data={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};