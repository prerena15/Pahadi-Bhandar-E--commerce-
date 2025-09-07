import React from "react";

function Products() {
  return (
    <section className="products" id="products">
      <h2>Choose from the best</h2>
      <div className="product-grid">
        <img src="/Village.jpg" alt="Orchard" />
        <img src="/farming.jpg" alt="Farming" />
        <img src="/rajma.jpg" alt="Apricot" />
      </div>

      <h2>Rediscover the taste</h2>
      <div className="product-grid">
        <div>
          <img src="/chilli.jpg" alt="Green Chilli Pickle" />
          <p>Green Chilli Pickle</p>
        </div>
        <div>
          <img src="/pickle.jpg" alt="Mango Pickle" />
          <p>Mango Pickle</p>
        </div>
        <div>
          <img src="/ragi.jpg" alt="Ragi (Manduwa)" id="ragi" />
          <p>Ragi (Manduwa)</p>
        </div>
        <div>
          <img src="/honey.jpg" alt="Pahadi Honey" id="honey" />
          <p>Pahadi Honey</p>
        </div>
        <div>
          <img src="/rajma.jpg" alt="Pahadi Honey" id="honey" />
          <p>Pahadi Rajma</p>
        </div>
        <div>
          <img src="/haranamak.jpg" alt="Pahadi Honey" id="honey" />
          <p>Pahadi Salt</p>
        </div>
        <div>
          <img src="/orange.jpg" alt="Pahadi Honey" id="honey" />
          <p>Malta Juice</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
