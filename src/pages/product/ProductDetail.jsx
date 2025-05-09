import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { PRODUCTS, isNewProduct } from "../../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faTag } from "@fortawesome/free-solid-svg-icons";

export const ProductDetail = () => {
  const params = useParams();
  const { theme } = useTheme();
  const product = PRODUCTS.find((product) => product.id === Number(params.id));

  // Add null check for product
  if (!product) {
    return <div className="container py-5 text-center">Product not found</div>;
  }

  const { id, productName, productImage, price, description, dateAdded, isNew, specs } = product;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);
  
  // Check if product is new
  const showNewBadge = isNew || (dateAdded && isNewProduct(dateAdded));
  
  // Get related products - same category (new/not new) and limit to 4
  const relatedItems = PRODUCTS.filter(
    (item) => {
      const itemIsNew = item.isNew || (item.dateAdded && isNewProduct(item.dateAdded));
      return item.id !== Number(params.id) && itemIsNew === showNewBadge;
    }
  ).slice(0, 4);

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{productName}</li>
        </ol>
      </nav>

      <div className="card mb-5 product-detail-card">
        <div className="row g-0">
          <div className="col-md-5">
            <div className="product-detail-image-container position-relative">
              {showNewBadge && (
                <span className="badge bg-success position-absolute top-0 end-0 m-3">New</span>
              )}
              <img
                src={productImage}
                className="img-fluid rounded-start product-detail-image"
                alt={productName}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card-body p-4">
              <h2 className="card-title mb-3" style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>{productName}</h2>
              <p className="card-text price mb-3">${price.toFixed(2)}</p>
              <p className="card-text mb-4" style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>{description}</p>
              
              {specs && (
                <div className="specs-container mb-4">
                  <h5 style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>Specifications</h5>
                  <ul className="list-group list-group-flush">
                    {Object.entries(specs).map(([key, value]) => (
                      <li key={key} className="list-group-item" style={{ 
                        backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f9fa',
                        color: theme === 'dark' ? '#e0e0e0' : '#333'
                      }}>
                        <strong className="text-capitalize">{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="d-flex gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-tech-primary position-relative"
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
        </div>
      </div>

      {relatedItems.length > 0 && (
        <>
          <h3 className="mb-4" style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}>
            {showNewBadge ? "Other New Products" : "Similar Products"}
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
            {relatedItems.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100 product-card">
                  <div className="product-image-container">
                    <img
                      src={product.productImage}
                      className="card-img-top product-image"
                      alt={product.productName}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <Link 
                        to={`/product/${product.id}`} 
                        className="product-link"
                        style={{ color: theme === 'dark' ? '#f0f0f0' : '#212529' }}
                      >
                        {product.productName}
                      </Link>
                    </h5>
                    <p className="card-text price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};