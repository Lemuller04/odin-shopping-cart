import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ links, isOpen, shouldAnimate, cartLength, toggleMenu }) => {
  const location = useLocation();

  return (
    <nav
      aria-label="Main navigation"
      className={`${shouldAnimate ? (isOpen ? styles.open : styles.closed) : "removed"} ${styles.menu}`}
    >
      <ul>
        {links.map((l) => {
          return (
            <li
              key={l.path}
              className={location.pathname === l.path ? styles["active"] : ""}
            >
              <Link
                to={l.path}
                aria-current={location.pathname === l.path ? "page" : undefined}
                onClick={toggleMenu}
              >
                {l.text}
                {l.text === "Cart" && cartLength > 0 && (
                  <span aria-label={`${cartLength} items in cart`}>
                    {cartLength}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array,
  isOpen: PropTypes.bool,
  shouldAnimate: PropTypes.bool,
  cartLength: PropTypes.number,
  toggleMenu: PropTypes.func,
};

export default Navbar;
