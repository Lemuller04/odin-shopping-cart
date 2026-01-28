import ItemCard from "../itemCard/ItemCard.jsx";
import ActionsBar from "../actionsBar/ActionsBar.jsx";
import styles from "./CartItem.module.css";

const CartItem = ({ item, updateCart, direction, buttonFunction }) => {
  return (
    <li className={styles[direction]}>
      <ItemCard item={item} />
      <ActionsBar
        item={item}
        defaultAmount={item.amount}
        updateCart={updateCart}
        buttonText="Remove from cart"
        buttonFunction={buttonFunction}
      />
    </li>
  );
};

export default CartItem;
