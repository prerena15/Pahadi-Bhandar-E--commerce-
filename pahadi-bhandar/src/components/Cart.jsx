import React, { useEffect, useState } from "react";
import { API_URL } from "../api"; // <-- import API_URL

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setError("Please login to see your cart.");
      setLoading(false);
      return;
    }

    fetch(`${API_URL}/cart`, {
      headers: { Authorization: "Bearer " + token },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cart");
        return res.json();
      })
      .then((data) => setCart(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const updateQty = async (productId, qty) => {
    try {
      const res = await fetch(`${API_URL}/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ qty }),
      });

      if (!res.ok) throw new Error("Failed to update quantity");
      const updatedCart = await res.json();
      setCart(updatedCart);
    } catch (err) {
      alert(err.message);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await fetch(`${API_URL}/cart/${productId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });

      if (!res.ok) throw new Error("Failed to remove item");
      const updatedCart = await res.json();
      setCart(updatedCart);
    } catch (err) {
      alert(err.message);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.qty,
    0
  );

  if (loading) return <div style={{ padding: 40 }}>Loading cart...</div>;
  if (error) return <div style={{ padding: 40, color: "red" }}>{error}</div>;

  return (
    <section className="shop">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="shop-grid">
            {cart.map((item) => (
              <div className="shop-card" key={item.product?._id}>
                <img src={item.product?.image} alt={item.product?.name} />
                <h3>{item.product?.name}</h3>
                <p className="price">₹{item.product?.price}</p>
                <div>
                  <button
                    onClick={() => updateQty(item.product._id, item.qty - 1)}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.product._id, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="buy-btn"
                  onClick={() => removeFromCart(item.product._id)}
                  style={{ marginTop: 10 }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "30px",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            Total: ₹{totalPrice}
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
