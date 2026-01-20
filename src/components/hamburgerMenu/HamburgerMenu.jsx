import styles from "./HamburgerMenu.module.css";

// The enableAnimation prop is to prevent the element from being animated on the first render

const HamburgerMenu = ({ isOpen, setIsOpen, enableAnimation }) => {
  return (
    <button
      className={styles["menu"]}
      onClick={() => { setIsOpen(); enableAnimation(); }}
      aria-label="toggle-menu"
      aria-expanded={isOpen}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className={isOpen ? styles["rotate"] : ""}
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

export default HamburgerMenu;
