import { Outlet } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import fakeItems from "../pages/shop/fakeItems.js";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet context={[fakeItems]}/>
      <Footer />
    </>
  );
};

export default Layout;
