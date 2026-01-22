import styles from "./itemCard.module.css";

const ItemCard = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="image place holder" width="144" height="144" />
            <h3>{item.title}</h3>
            <div className={styles["bottom-line"]}>
                <span>{item.rating}</span>
                <span>${item.price}</span>
            </div>
        </div>
    )
};

export default ItemCard;
