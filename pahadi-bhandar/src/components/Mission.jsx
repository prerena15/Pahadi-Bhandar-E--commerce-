import React from "react";
import rice from "../../public/rice.jpg";
import chilli from "../../public/chilli.jpg";
import pickle from "../../public/pickle.jpg";

function Mission() {
  return (
    <section className="mission" id="about">
      <h2>Mission we are working on</h2>
      <p>
        At Pahadi Bhandar, we are working to preserve the traditional farming
        practices of Uttarakhand while promoting healthy, organic living.
      </p>
      <ul>
        <li>🌱 Organic making</li>
        <li>🚚 Fast delivery</li>
      </ul>
      <div className="mission-images">
        <img src={rice} alt="Red Rice" />
        <img src={chilli} alt="Chilli" />
        <img src={pickle} alt="Pickle" />
      </div>
    </section>
  );
}

export default Mission;
