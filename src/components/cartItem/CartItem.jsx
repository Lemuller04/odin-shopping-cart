import { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, updateCart, removeFromCart }) => {
  const updateAmount = (factor) => {
    const newAmount = item.amount + factor;
    if (newAmount < 1) return;
    updateCart(item, newAmount);
  };

  const handleInput = (e) => {
    const inputAmount  = e.target.value;

    if (inputAmount.trim() === "") {
      updateCart(item, 1);
      return;
    }

    const num = Number(inputAmount);

    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
      return;
    }

    updateCart(item, num);
  }

  return(
    <li className={styles["item-container"]}>
      <img src={item.img} alt="image placeholder" width="100" height="100" />
      <div>
        <h3>{item.title}</h3>
        <p><span>{item.rating}</span><span>${item.price.toFixed(2)} each</span></p>
      </div>
      <div className={styles["actions-bar"]}>
        <button
          type="button"
          onClick={() => {updateAmount(-1)}}
        >-</button>
        <input
          type="tel"
          name="inputAmount"
          onChange={handleInput}
          value={item.amount}
        />
        <button
          type="button"
          onClick={() => {updateAmount(1)}}
        >+</button>
        <p>
          Total: {(item.amount * item.price).toFixed(2)}
        </p>
        <button className={styles["remove-from-cart"]}
          onClick={() => { removeFromCart(item) }}
          type="button"
        >Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
