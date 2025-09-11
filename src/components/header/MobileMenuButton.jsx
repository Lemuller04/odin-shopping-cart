const MobileMenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="hamburguer-menu"
      onClick={setIsOpen}
      aria-label="toggle-menu"
      aria-expanded={isOpen}
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className={`${isOpen ? "menu-open" : ""}`}
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

export default MobileMenuButton;
