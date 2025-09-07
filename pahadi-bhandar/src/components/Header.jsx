import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <h1 className="brand">Pahadi Bhandar</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/shop">Shop Now</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/cart">Cart</Link> |{" "}
      </nav>
    </header>
  );
}

export default Header;
