import { useOutletContext, Link } from "react-router-dom";
import styles from "./Cart.module.css";
import CartItem from "../../components/cartItem/CartItem.jsx";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  let totalCartPrice = 0;

  for (let i of cart) {
    totalCartPrice += (i.amount * i.price);
  }

  const updateCart = (item, amount) => {
    const index = cart.findIndex(i => i.id === item.id);
    const newCart = [...cart];

    if (index < 0) {
      const newItem = {...item};
      newItem.amount = amount;
      newCart.push(newItem);
    } else {
      newCart[index].amount = amount;
    }

    setCart(newCart);
  };

  const removeFromCart = ( item ) => {
    const newCart = cart.filter((i) => i.id !== item.id);
    setCart(newCart);
  };

  return (
    <>
      <div className={"body" + " " + styles["cart-body"]}>
          <h1>Your Cart</h1>
          <main>
            {(cart.length >= 1) ? 
              <>
                <h2>Items:</h2>
                <ul className={styles["cart-list"]}>
                  {cart.map((i) => {
                    return (
                      <CartItem key={i.id} item={i} updateCart={updateCart} removeFromCart={removeFromCart} />
                    )
                  })}
                </ul>
              </>
            :
              <>
                <p>Seems like your cart is empty 🥺</p>
                <p>Lets change that! 😉</p>
                <Link to="/shop">Click here to see all our products</Link>
              </>
            }
            {cart.length >= 1 && 
              <div className={styles["Summary"]}>
                <>
                  <h2>Summary:</h2>
                  <p>Total: {totalCartPrice}</p>
                  <button>Checkout</button>
                </>
              </div>
            }
          </main>
      </div>
    </>
  )
}

export default Cart;
