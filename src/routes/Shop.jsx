import { useOutletContext } from "react-router-dom";

import "../styles/shop.css";

const Shop = () => {
  const { products, loading, error } = useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <section className="shop-section">
      {products.map((p, index) => (
        <div key={p.id} className="shop-card">
          <img src={p.image} alt="Product" />
          <div className="product-info">
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <div className="shop-add-to-cart-section">
              <div className="shop-add-to-cart-buttons">
                <button></button>
                <input type="tel" />
                <button></button>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Shop;
