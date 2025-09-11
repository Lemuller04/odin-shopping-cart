import { useOutletContext, NavLink } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { products, loading, error, cart, setCart } = useOutletContext();
  const cartKeys = Object.keys(cart);

  return (
    <main className="cart-main">
      <h2>TODO</h2>
    </main>
  );

  if (cartKeys.length < 1) {
    return (
      <main className="cart-main">
        <h2>
          Seems like the cart is empty
          <br />
          Lets change that!
        </h2>
        <button className="empty-card-button">
          <NavLink to="/shop">See all our products</NavLink>
        </button>
      </main>
    );
  }

  return (
    <>
      <h2>My Cart</h2>
      <div className="cart-items"></div>
    </>
  );
};

export default Cart;
