import styles from "./itemCard.module.css";

const ItemCard = ({ item, direction = "vertical" }) => {
  return (
    <li className={styles[direction]}>
      <img src={item.image} alt={item.description} width="144" height="144" />
      <div>
        <h3>{item.title}</h3>
        <p>
          <span aria-label={`Rated ${item.rating.rate} out of 5 stars`}>
            ★ {item.rating.rate}
          </span>
          <span>${item.price.toFixed(2)}</span>
        </p>
      </div>
    </li>
  );
};

export default ItemCard;
