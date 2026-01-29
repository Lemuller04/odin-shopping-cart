import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CartItemActionsBar.module.css";

const CartItemActionsBar = ({ item, setItemAmount, removeFromCart }) => {
  const handleInput = (e) => {
    const newAmount = e.target.value;
    const num = Number(newAmount);

    if (isNaN(num) || !Number.isInteger(num)) return;

    setItemAmount(item, num);
  };

  const checkInput = (e) => {
    const num = Number(e.target.value);
    if (isNaN(num) || !Number.isInteger(num) || num < 1) removeFromCart(item);
    setItemAmount(item, num);
  };

  const updateAmount = (factor) => {
    const newAmount = item.amount + factor;
    if (newAmount < 1) return;
    setItemAmount(item, newAmount);
  };

  return (
    <div className={styles.actions}>
      <button
        disabled={item.amount <= 1}
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
        value={item.amount}
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
          removeFromCart(item);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

CartItemActionsBar.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  setItemAmount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItemActionsBar;
