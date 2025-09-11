import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "../styles/shop.css";

const Shop = () => {
  const { products, loading, error } = useOutletContext();
  const [fieldAmount, setFieldAmount] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  useEffect(() => {
    if (products.length > 0) {
      setFieldAmount(new Array(products.length).fill(1));
    }
  }, [products]);

  function handleChange(e, index) {
    const newAmount = [...fieldAmount];
    newAmount[index] = parseInt(e.target.value) || 1;
    setFieldAmount(newAmount);
  }

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
                <input
                  type="number"
                  min="1"
                  name="amount"
                  id="amount"
                  value={fieldAmount[index]}
                  onChange={(e) => handleChange(e, index)}
                />
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
