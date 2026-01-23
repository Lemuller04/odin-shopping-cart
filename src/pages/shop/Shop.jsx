import { useOutletContext } from "react-router-dom";
import ShopItem from "../../components/shopItem/ShopItem.jsx";
import styles from "./Shop.module.css";

const Shop = () => {
  const [cart, setCart, fakeItems] = useOutletContext();

  const updateCart = (item, amount) => {
    const index = cart.findIndex(i => i.id === item.id);
    const newCart = [...cart];

    if (index < 0) {
      const newItem = {...item};
      newItem.amount = amount;
      newCart.push(newItem);
    } else {
      newCart[index].amount += amount;
    }

    setCart(newCart);
  };

  return (
    <>
      <div className="body">
        <h1 className={styles["h1"]}>All Products</h1>
        <div className={styles["products"]}>
          {fakeItems.map((i) => {
            return (<ShopItem key={i.id} item={i} updateCart={updateCart} />);
          })}
        </div>
      </div>
    </>
  )
}

export default Shop;
