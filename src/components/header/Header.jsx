import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar.jsx";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.jsx";
import styles from "./Header.module.css";
import logo from "../../assets/logo-200-50.webp";

const Header = ({ cartLength }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const toggleHambugerMenu = () => setMenuIsOpen(!menuIsOpen);
  const enableMenuAnimation = () => setIsFirstRender(false);

  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/shop",
      text: "Shop",
    },
    {
      path: "/cart",
      text: "Cart",
    },
  ];

  return (
    <header className={styles["main"]}>
      <img src={logo} alt="Site logo" width="200" height="50" />
      <HamburgerMenu
        isOpen={menuIsOpen}
        setIsOpen={toggleHambugerMenu}
        enableAnimation={enableMenuAnimation}
      />
      <Navbar
        links={links}
        isOpen={menuIsOpen}
        shouldAnimate={!isFirstRender}
        cartLength={cartLength}
        toggleMenu={toggleHambugerMenu}
      />
      <div
        onClick={() => {
          setMenuIsOpen(false);
        }}
        className={`${!menuIsOpen ? "removed" : ""} ${styles.backdrop}`}
        data-testid="backdrop"
      ></div>
    </header>
  );
};

Header.propTypes = {
  cartLength: PropTypes.number,
};

export default Header;
