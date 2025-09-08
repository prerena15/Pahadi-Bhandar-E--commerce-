import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";
import { API_URL } from "../api"; // <-- import API_URL

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validatePassword(pass) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 chars, 1 uppercase, 1 number, 1 special char."
      );
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Signup
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
