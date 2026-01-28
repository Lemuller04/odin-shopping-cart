import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ActionsBar.module.css";

const ActionsBar = ({
  item,
  defaultAmount,
  updateCart,
  buttonText,
  buttonFunction,
}) => {
  const [amount, setAmount] = useState(defaultAmount);

  const handleInput = (e) => {
    const newAmount = e.target.value;
    const num = Number(newAmount);

    if (isNaN(num) || !Number.isInteger(num)) return;

    setAmount(num);
    if (buttonText.includes("Remove")) updateCart(item, num);
  };

  const updateAmount = (factor) => {
    const newAmount = amount + factor;
    if (newAmount < 1) return;
    setAmount(newAmount);
    if (buttonText.includes("Remove")) updateCart(item, newAmount);
  };

  const checkAmount = () => {
    if (amount < 1) return;
    buttonFunction(item, amount);
    setAmount(1);
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
      <button type="button" onClick={checkAmount}>
        {buttonText}
      </button>
    </div>
  );
};

ActionsBar.propTypes = {
  item: PropTypes.object.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default ActionsBar;
