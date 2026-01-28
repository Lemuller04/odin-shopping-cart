import { useOutletContext, Link } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem.jsx";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, setItemAmount, removeFromCart } = useOutletContext();

  if (cart.length < 1) {
    return (
      <main className={styles.empty}>
        <h1>Looks like your cart is empty 🥺</h1>
        <Link to="/shop">Let's change that!</Link>
      </main>
    );
  }

  return (
    <main className={styles.cart}>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((p) => {
          return (
            <CartItem
              key={p.id}
              item={p}
              direction="horizontal"
              updateCart={setItemAmount}
              buttonFunction={removeFromCart}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Cart;
