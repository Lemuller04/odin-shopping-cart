import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "../styles/shop.css";

const Shop = () => {
  const { products, loading, error, cart, setCart } = useOutletContext();
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

  function handleAddButton(factor, index) {
    if (fieldAmount[index] + factor < 1) return;
    const newAmount = [...fieldAmount];
    newAmount[index] += factor;
    setFieldAmount(newAmount);
  }

  function handleCart(item, index) {
    const newCart = { ...cart };
    newCart[item.id]
      ? (newCart[item.id] += fieldAmount[index])
      : (newCart[item.id] = fieldAmount[index]);
    setCart(newCart);
  }

  return (
    <section className="shop-section">
      {products.map((p, index) => (
        <div key={p.id} className="shop-card">
          <img src={p.image} alt={p.title} />
          <div className="product-info">
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <div className="shop-add-to-cart-section">
              <div className="shop-add-to-cart-buttons">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => handleAddButton(-1, index)}
                ></button>
                <input
                  type="number"
                  min="1"
                  name="amount"
                  value={fieldAmount[index] || "1"}
                  onChange={(e) => handleChange(e, index)}
                />
                <button
                  aria-label="Increase quantity"
                  onClick={() => handleAddButton(1, index)}
                ></button>
              </div>
              <button onClick={() => handleCart(p, index)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Shop;
