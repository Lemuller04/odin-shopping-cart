import { useState } from "react";
import styles from "./ShopItemActionsBar.module.css";

const ShopItemActionsBar = ({ addToCart, item }) => {
  const [amount, setAmount] = useState(1);

  const handleInput = (e) => {
    const newAmount = e.target.value;
    const num = Number(newAmount);

    if (isNaN(num) || !Number.isInteger(num)) return;

    setAmount(num);
  };

  const checkInput = (e) => {
    const num = Number(e.target.value);
    if (isNaN(num) || !Number.isInteger(num) || num < 1) setAmount(1);
  };

  const updateAmount = (factor) => {
    const newAmount = amount + factor;
    if (newAmount < 1) return;
    setAmount(newAmount);
  };

  return (
    <div className={styles.actions}>
      <button
        disabled={amount <= 1}
        aria-label="Decrease quantity"
        type="button"
        onClick={() => {
          updateAmount(-1);
        }}
        className={styles.sub}
      >
        -
      </button>
      <input
        aria-label="Quantity"
        type="tel"
        min="1"
        name="amount"
        value={amount}
        onChange={handleInput}
        onBlur={checkInput}
      />
      <button
        aria-label="Increase quantity"
        type="button"
        onClick={() => {
          updateAmount(1);
        }}
        className={styles.add}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          addToCart(item, amount);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShopItemActionsBar;
