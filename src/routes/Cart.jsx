import { useOutletContext, NavLink } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { products, loading, error, cart, setCart } = useOutletContext();
  const cartKeys = Object.keys(cart);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if (cartKeys.length < 1) {
    return (
      <main className="cart-main cart-empty">
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

  function handleRemoval(item) {
    const newKeys = cartKeys.filter((k) => k != item);
    let newCart = {};
    for (const k of newKeys) {
      newCart[k] = cart[k];
    }
    setCart(newCart);
  }

  let total = 0;

  return (
    <main className="cart-main">
      <h2>My Cart</h2>
      <div className="cart-items">
        {products.map((p, index) => {
          for (const k of cartKeys) {
            if (p.id == k) {
              total += cart[p.id] * p.price;
              return (
                <div key={p.id} className="cart-item">
                  <img src={p.image} alt="Product in cart" />
                  <div className="cart-product-info">
                    <h3>{p.title}</h3>
                    <p>${p.price} each</p>
                    <p>
                      Amount: {cart[p.id]} item{cart[p.id] > 1 ? "s" : ""} -
                      Total price: ${cart[p.id] * p.price}
                    </p>
                  </div>
                  <div className="cart-product-buttons">
                    <button onClick={() => handleRemoval(p.id)}>Remove</button>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      <div className="checkout">
        <p>Total to pay: ${total}</p>
        <button>Proceed to payment</button>
      </div>
    </main>
  );
};

export default Cart;
