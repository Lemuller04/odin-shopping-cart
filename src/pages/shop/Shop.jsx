import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/shopItem/ShopItem.jsx";
import styles from "./Shop.module.css";

const Shop = () => {
  const { products, addToCart } = useOutletContext();

  return (
    <main className={styles["shop-main"]}>
      <ul>
        {products.map((p) => {
          return (
            <ShopItem
              key={p.id}
              item={p}
              updateCart={addToCart}
              direction="horizontal"
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Shop;
