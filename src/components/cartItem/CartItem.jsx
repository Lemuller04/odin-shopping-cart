import PropTypes from "prop-types";
import ItemCard from "../itemCard/ItemCard.jsx";
import CartItemActionsBar from "../CartItemActionsBar/CartItemActionsBar.jsx";
import styles from "./CartItem.module.css";

const CartItem = ({ item, direction, setItemAmount, removeFromCart }) => {
  return (
    <li className={styles[direction]}>
      <ItemCard item={item} />
      <p className={styles.price}>
        Total: ${(item.amount * item.price).toFixed(2)}
      </p>
      <CartItemActionsBar
        item={item}
        setItemAmount={setItemAmount}
        removeFromCart={removeFromCart}
      />
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  direction: PropTypes.string,
  setItemAmount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
