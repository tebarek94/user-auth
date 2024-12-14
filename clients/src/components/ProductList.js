import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  // Delete a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      alert("Product deleted successfully");
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="App">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description} - $
            {product.price}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
