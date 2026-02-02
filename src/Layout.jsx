import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    fetchItems();
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (item, amount) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((i) => i.id === item.id);
      const newCart = [...prevCart];

      if (index >= 0) {
        newCart[index] = {
          ...newCart[index],
          amount: newCart[index].amount + amount,
        };
      } else {
        newCart.push({ ...item, amount });
      }
      return newCart;
    });
  };

  const setItemAmount = (item, amount) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((i) => i.id === item.id);
      if (index === -1) return prevCart;

      const newCart = [...prevCart];
      newCart[index] = { ...newCart[index], amount: amount };
      return newCart;
    });
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  };

  const cartLength = cart.reduce((sum, i) => sum + i.amount, 0);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main>
          <p>Error</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header cartLength={cartLength} />
      <Outlet
        context={{
          products,
          cart,
          addToCart,
          setItemAmount,
          removeFromCart,
          clearCart,
        }}
      />
      <Footer />
    </>
  );
};

export default Layout;
