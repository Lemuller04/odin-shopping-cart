import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };

    fetchItems();
  }, []);

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
      <Header />
      <Outlet context={{ products }} />
      <Footer />
    </>
  );
};

export default Layout;
