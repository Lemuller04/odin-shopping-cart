import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import fakeItems from "../pages/shop/fakeItems.js";

const Layout = () => {
  const [cart, setCart] = useState([]);

  let cartLength = 0;

  for (let i of cart) {
    cartLength += Number(i.amount);
  }

  return (
    <>
      <Header cartLength={cartLength} />
      <Outlet context={[cart, setCart, fakeItems]}/>
      <Footer />
    </>
  );
};

export default Layout;
