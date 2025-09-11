import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../styles/components/header.css";

import MobileMenuButton from "./MobileMenuButton.jsx";

const Header = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav>
        <div className="header-topbar">
          {/* LOGO */}
          <h1>MyBrandLogo</h1>

          {/* HAMBURGER MENU */}
          <MobileMenuButton isOpen={isOpen} setIsOpen={toggleMenu} />

          {/* DESKTOP MENU */}
          <ul className="header-desktop-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                {Object.keys(cart).length >= 1 && (
                  <span className="cart-number">
                    {Object.keys(cart).length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SIDE MOBILE MENU */}
        {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        <ul className={`mobile-menu ${isOpen ? "open-menu" : "closed-menu"}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={toggleMenu}>
              Cart
              {Object.keys(cart).length >= 1 && (
                <span className="cart-number">{Object.keys(cart).length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
