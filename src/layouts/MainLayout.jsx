import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

const MainLayout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchAllProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log("Data fetched sucessfully");
          setProducts(data);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchAllProducts();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <Outlet context={{ products, loading, error, cart, setCart }} />
      <Footer />
    </>
  );
};

export default MainLayout;
