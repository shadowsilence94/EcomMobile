import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product"; // Changed to default import

const Products = () => {
  return (
    <div className="products w-100">
      <div className="products-title">
        <h1>Products</h1>
      </div>
      <div className="products-list d-flex flex-wrap justify-content-center gap-3">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
