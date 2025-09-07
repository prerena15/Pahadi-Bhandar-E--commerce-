import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <h1>Pahadi Bhandar: Pure Pahadi, Pure Organic</h1>
        <p>From Uttarakhand’s Hills To Your Home</p>
        <p>
          We bring you healthy organic products grown in the clean hills of
          Uttarakhand. Natural and handpicked, trusted and delivered to your home.
        </p>
        {/* ✅ Public image */}
        {/* <img src="/orange.jpg" alt="Organic Product" className="hero-img" /> */}

        <div>
          <Link to="/shop">
            <button className="get">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
