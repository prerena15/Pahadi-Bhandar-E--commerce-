import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pahadi Bhandar. All rights reserved.</p>
      <nav>
        <a href="/">Home</a> | 
        <a href="/products">Products</a> | 
        <a href="/shop">Shop Now</a>
      </nav>
    </footer>
  );
}

export default Footer;
