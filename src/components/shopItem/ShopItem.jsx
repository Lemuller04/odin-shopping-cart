import { useState } from "react";
import ItemCard from "../itemCard/ItemCard.jsx";
import styles from "./ShopItem.module.css";

const ShopItem = ({ item, updateCart }) => {
  const [amount, setAmount] = useState(1);

  const updateAmount = (factor) => {
    const newAmount = amount + factor;
    if (newAmount < 1) return;
    setAmount(newAmount);
  };

  const handleInput = (e) => {
    const inputAmount  = e.target.value;

    if (inputAmount.trim() === "") {
      setAmount("1");
      return;
    }

    const num = Number(inputAmount);

    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
      return;
    }

    setAmount(inputAmount);
  }

  return (
    <div className={styles["card-container"]}>
      <ItemCard item={item} />
      <div className={styles["actions-line"]}>
        <button
          type="button"
          onClick={() => {updateAmount(-1)}}
        >-</button>
        <input
          type="tel"
          name="inputAmount"
          onChange={handleInput}
          value={amount}
        />
        <button
          type="button"
          onClick={() => {updateAmount(1)}}
        >+</button>
        <button
          type="button"
          className={styles["add-to-cart"]}
          onClick={() => {updateCart(item, amount);}}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopItem;
