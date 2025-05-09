// src/pages/admin/AdminProducts.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { PRODUCTS, isNewProduct } from "../../products"; // We'll initially use this static data for display

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    productImage: "",
    description: "",
    isNew: false,
    dateAdded: new Date(),
    specs: {
      display: "",
      processor: "",
      camera: "",
      battery: "",
      storage: ""
    }
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const { theme } = useTheme();

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

  const handleSpecChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ 
        ...editingProduct, 
        specs: { ...editingProduct.specs, [name]: value } 
      });
    } else {
      setNewProduct({ 
        ...newProduct, 
        specs: { ...newProduct.specs, [name]: value } 
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: checked });
    } else {
      setNewProduct({ ...newProduct, [name]: checked });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const id = 
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const productToAdd = { 
      ...newProduct, 
      id,
      price: parseFloat(newProduct.price) || 0, // Ensure price is a number
      dateAdded: new Date()
    };
    setProducts([...products, productToAdd]);
    setNewProduct({
      productName: "",
      price: "",
      productImage: "",
      description: "",
      isNew: false,
      dateAdded: new Date(),
      specs: {
        display: "",
        processor: "",
        camera: "",
        battery: "",
        storage: ""
      }
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

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    window.location.href = '/admin/login';
  };

  const textColor = theme === 'dark' ? '#f0f0f0' : '#212529';
  const bgColor = theme === 'dark' ? '#333' : '#fff';
  const inputBgColor = theme === 'dark' ? '#444' : '#fff';
  const inputTextColor = theme === 'dark' ? '#f0f0f0' : '#212529';
  const borderColor = theme === 'dark' ? '#555' : '#ced4da';

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: textColor }}>Admin Products</h2>
        <button 
          className="btn btn-outline-danger" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="card p-4 mb-4" style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        <h4 style={{ color: textColor }}>{editingProduct ? "Edit Product" : "Add New Product"}</h4>
        <form
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="productName" className="form-label" style={{ color: textColor }}>
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
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="price" className="form-label" style={{ color: textColor }}>
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
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="productImage" className="form-label" style={{ color: textColor }}>
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
              style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label" style={{ color: textColor }}>
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
              style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
            ></textarea>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isNew"
              name="isNew"
              checked={
                editingProduct
                  ? editingProduct.isNew
                  : newProduct.isNew
              }
              onChange={handleCheckboxChange}
              style={{ backgroundColor: inputBgColor, borderColor }}
            />
            <label className="form-check-label" htmlFor="isNew" style={{ color: textColor }}>
              Mark as New Product
            </label>
          </div>

          <h5 className="mt-4" style={{ color: textColor }}>Specifications</h5>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="display" className="form-label" style={{ color: textColor }}>
                Display
              </label>
              <input
                type="text"
                className="form-control"
                id="display"
                name="display"
                value={
                  editingProduct
                    ? editingProduct.specs?.display || ""
                    : newProduct.specs?.display
                }
                onChange={handleSpecChange}
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="processor" className="form-label" style={{ color: textColor }}>
                Processor
              </label>
              <input
                type="text"
                className="form-control"
                id="processor"
                name="processor"
                value={
                  editingProduct
                    ? editingProduct.specs?.processor || ""
                    : newProduct.specs?.processor
                }
                onChange={handleSpecChange}
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="camera" className="form-label" style={{ color: textColor }}>
                Camera
              </label>
              <input
                type="text"
                className="form-control"
                id="camera"
                name="camera"
                value={
                  editingProduct
                    ? editingProduct.specs?.camera || ""
                    : newProduct.specs?.camera
                }
                onChange={handleSpecChange}
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="battery" className="form-label" style={{ color: textColor }}>
                Battery
              </label>
              <input
                type="text"
                className="form-control"
                id="battery"
                name="battery"
                value={
                  editingProduct
                    ? editingProduct.specs?.battery || ""
                    : newProduct.specs?.battery
                }
                onChange={handleSpecChange}
                style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="storage" className="form-label" style={{ color: textColor }}>
              Storage
            </label>
            <input
              type="text"
              className="form-control"
              id="storage"
              name="storage"
              value={
                editingProduct
                  ? editingProduct.specs?.storage || ""
                  : newProduct.specs?.storage
              }
              onChange={handleSpecChange}
              style={{ backgroundColor: inputBgColor, color: inputTextColor, borderColor }}
            />
          </div>

          <button type="submit" className="btn btn-tech-primary me-2">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
          {editingProduct && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <h4 className="mb-3" style={{ color: textColor }}>Products List</h4>
      <div className="table-responsive">
        <table className="table" style={{ color: textColor }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Status</th>
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
                    style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                </td>
                <td>
                  {product.isNew || (product.dateAdded && isNewProduct(product.dateAdded)) ? (
                    <span className="badge bg-success">New</span>
                  ) : (
                    <span className="badge bg-secondary">Standard</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
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
    </div>
  );
};