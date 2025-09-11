import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/header/Header.jsx";

const MainLayout = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          console.log("Data fetched sucessfully");
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
      <Header />
      <Outlet context={{ products, loading, error }} />
    </>
  );
};

export default MainLayout;
