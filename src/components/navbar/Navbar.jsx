import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

// The shouldAnimate prop is to prevent the element from being animated on the first render

const Navbar = ({ links, isOpen, shouldAnimate }) => {
  const location = useLocation();

  return (
    <nav
      aria-label="Main navigation"
      className={ (shouldAnimate ? isOpen ? styles["open"] : styles["closed"] : "") + " " + styles["menu"]}
    >
      <ul>
        {links.map((l) => {
          return (
            <li
              key={ l.path }
              className={ location.pathname === l.path ? styles["active"] : "" }
            >
              <Link
                to={ l.path }
                aria-current={ location.pathname === l.path ? "page" : undefined }
              >{l.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
