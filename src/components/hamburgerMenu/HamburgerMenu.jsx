import PropTypes from "prop-types";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ isOpen, setIsOpen, enableAnimation }) => {
  return (
    <button
      className={styles["mobile-nav"]}
      onClick={() => {
        setIsOpen();
        enableAnimation();
      }}
      aria-label={isOpen ? "Close main menu" : "Open main menu"}
      aria-expanded={isOpen}
    >
      <svg
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className={isOpen ? styles["rotate"] : ""}
        data-testid="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
          className={isOpen ? "opaque" : "transparent"}
          data-testid="path1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
          className={isOpen ? "transparent" : "opaque"}
          data-testid="path2"
        />
      </svg>
    </button>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  enableAnimation: PropTypes.func.isRequired,
};

export default HamburgerMenu;
