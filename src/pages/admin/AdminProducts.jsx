// src/pages/admin/AdminProducts.jsx
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products"; // We'll initially use this static data for display

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    productImage: "",
    description: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const id = 
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const productToAdd = { 
      ...newProduct, 
      id,
      price: parseFloat(newProduct.price) || 0 // Ensure price is a number
    };
    setProducts([...products, productToAdd]);
    setNewProduct({
      productName: "",
      price: "",
      productImage: "",
      description: "",
    });
    console.log("Added product (frontend only):", productToAdd);
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...editingProduct,
      price: parseFloat(editingProduct.price) || 0 // Ensure price is a number
    };
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
    console.log("Updated product (frontend only):", updatedProduct);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    console.log("Deleted product (frontend only) with id:", id);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="container">
      <h3>Admin Products</h3>

      <div className="card p-3 mb-4">
        <h4>{editingProduct ? "Edit Product" : "Add New Product"}</h4>
        <form
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        >
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={
                editingProduct
                  ? editingProduct.productName
                  : newProduct.productName
              }
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={editingProduct ? editingProduct.price : newProduct.price}
              onChange={handleInputChange}
              step="0.01"
              min="0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image Path
            </label>
            <input
              type="text"
              className="form-control"
              id="productImage"
              name="productImage"
              value={
                editingProduct
                  ? editingProduct.productImage
                  : newProduct.productImage
              }
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={
                editingProduct
                  ? editingProduct.description
                  : newProduct.description
              }
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
          {editingProduct && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <h4>Products List</h4>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>${Number(product.price).toFixed(2)}</td>
              <td>
                <img
                  src={product.productImage}
                  alt={product.productName}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{product.description || "N/A"}</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
