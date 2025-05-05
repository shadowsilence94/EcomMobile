import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PRODUCTS } from "../../products";
import { FavoriteItem } from "./FavoriteItem";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Favorite = () => {
  const { favoriteIds } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="container">
      <div className="products-title">
        {" "}
        {/* Using products-title for consistency */}
        <h3>Favorite Items</h3>
      </div>
      {favoriteIds.length === 0 ? (
        // Display message when favorite list is empty
        <div className="text-center mt-4">
          <p>Your favorite list is empty.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        // Display favorite items when list is not empty
        <div className="products-list d-flex flex-wrap gap-2">
          {" "}
          {/* Using products-list for consistency */}
          {favoriteIds.map((fid) => {
            const product = PRODUCTS.find((product) => product.id === fid);
            return <FavoriteItem data={product} key={fid} />;
          })}
        </div>
      )}
    </div>
  );
};
