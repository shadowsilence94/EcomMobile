import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import SearchBox from "../../components/SearchBox";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const [sortOption, setSortOption] = useState("newest");

  // Filter and sort products whenever search term or sort option changes
  useEffect(() => {
    let results = [...PRODUCTS];
    
    // Apply search filter
    if (searchTerm.trim() !== "") {
      results = results.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case "newest":
        results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "name":
        results.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      default:
        break;
    }
    
    setFilteredProducts(results);
  }, [searchTerm, sortOption]);

  // Update spacer height when search box becomes sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Get the height of the search box when it becomes sticky
        const searchBoxHeight = document.querySelector('.sticky-search')?.offsetHeight || 0;
        setSpacerHeight(searchBoxHeight);
      } else {
        setSpacerHeight(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="products w-100 container-fluid py-4">
      <div className="products-title mb-3 text-center">
        <h1>Latest Products</h1>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {/* Add a spacer div that takes up space when the search box becomes fixed */}
          <div style={{ height: `${spacerHeight}px` }} className="search-box-spacer"></div>
        </div>
      </div>
      
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-end">
          <div className="sort-options">
            <label className="me-2">Sort by:</label>
            <select 
              className="form-select form-select-sm" 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              style={{ width: 'auto', display: 'inline-block' }}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="no-results text-center py-5">
          <h3>No products found</h3>
          <p>Try a different search term</p>
        </div>
      ) : (
        <div className="products-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <Product data={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;