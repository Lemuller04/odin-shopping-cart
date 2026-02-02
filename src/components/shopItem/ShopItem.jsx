import PropTypes from "prop-types";
import ItemCard from "../itemCard/ItemCard.jsx";
import ShopItemActionsBar from "../ShopItemActionsBar/ShopItemActionsBar.jsx";
import styles from "./ShopItem.module.css";

const ShopItem = ({ item, addToCart, direction }) => {
  return (
    <li className={styles[direction]}>
      <ItemCard item={item} />
      <ShopItemActionsBar addToCart={addToCart} item={item} />
    </li>
  );
};

ShopItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  direction: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
};

export default ShopItem;
