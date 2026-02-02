import { useOutletContext, Link } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem.jsx";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, setItemAmount, removeFromCart, clearCart } = useOutletContext();

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
              setItemAmount={setItemAmount}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </ul>
      <div className={styles.summary}>
        <h2>Summary:</h2>
        <div>
          Total cart price: $
          {cart.reduce((sum, i) => sum + i.amount * i.price, 0).toFixed(2)}
        </div>
        <button
          type="button"
          onClick={() => {
            alert("The cake is a lie.");
            clearCart();
          }}
        >
          Check out
        </button>
        <p>This is a fake store with fake items made to practice React</p>
      </div>
    </main>
  );
};

export default Cart;
