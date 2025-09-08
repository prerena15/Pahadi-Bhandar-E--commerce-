import React, { useEffect, useState } from "react";
import { API_URL } from "../api"; // <-- import API_URL

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch products from backend
  const fetchProducts = () => {
    setLoading(true);
    let url = `${API_URL}/products?`;

    if (category) url += `category=${category}&`;
    if (minPrice) url += `minPrice=${minPrice}&`;
    if (maxPrice) url += `maxPrice=${maxPrice}&`;

    fetch(url, { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilter = () => fetchProducts();

  const addToCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to cart.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/cart/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ qty: 1 }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      alert("Item added to cart!");
    } catch (err) {
      alert(err.message || "Error adding item to cart");
    }
  };

  if (loading) return <div style={{ padding: 40 }}>Loading products...</div>;
  if (error) return <div style={{ padding: 40, color: "red" }}>{error}</div>;

  return (
    <section className="shop">
      <h2>Shop Now</h2>

      <div style={{ marginBottom: 20 }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Spices">Spices</option>
          <option value="Pulses">Pulses</option>
          <option value="Grains">Grains</option>
          <option value="Honey">Honey</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        <button onClick={handleFilter} style={{ marginLeft: 10 }}>
          Apply Filter
        </button>
      </div>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="shop-grid">
          {products.map((item) => (
            <div className="shop-card" key={item._id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button className="buy-btn" onClick={() => addToCart(item._id)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Shop;
