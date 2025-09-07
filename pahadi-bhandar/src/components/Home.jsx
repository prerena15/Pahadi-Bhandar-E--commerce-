import React from "react";
import Hero from "./Hero";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Hero />

      <section className="mission">
        <h2>Our Mission</h2>
        <div id="para">
          <p>
            At Pahadi Bhandar, we are working to preserve the traditional farming
            practices of Uttarakhand while promoting healthy, organic living.
            Our goal is to empower local farmers, protect nature, and deliver pure
            Pahadi produce to every home with trust and authenticity.
          </p>
        </div>
        <img src="/farming.jpg" alt="Farming" className="vill" />
      </section>

      <Products />
    </div>
  );
}

export default Home;
