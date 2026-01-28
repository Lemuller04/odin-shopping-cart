import ItemCard from "../itemCard/ItemCard.jsx";
import ActionsBar from "../actionsBar/ActionsBar.jsx";
import styles from "./ShopItem.module.css";

const ShopItem = ({ item, updateCart, direction }) => {
  return (
    <li className={styles[direction]}>
      <ItemCard item={item} />
      <ActionsBar
        item={item}
        defaultAmount={1}
        updateCart={updateCart}
        buttonText="Add to cart"
        buttonFunction={updateCart}
      />
    </li>
  );
};

export default ShopItem;
