import PropTypes from "prop-types";
import styles from "./itemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.title} width="144" height="144" />
      <div className={styles.details}>
        <h3>{item.title}</h3>
        <p>
          <span aria-label={`Rated ${item.rating.rate} out of 5 stars`}>
            ★ {item.rating.rate}
          </span>
          <span>${item.price.toFixed(2)}</span>
        </p>
      </div>
    </>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ItemCard;
