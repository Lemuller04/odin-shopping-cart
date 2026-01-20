import { useState } from "react";
import Navbar from "../navbar/Navbar.jsx";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.jsx";
import styles from "./Header.module.css";
import logo from "../../assets/logo-200-50.webp";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const toggleHambugerMenu = () => setMenuIsOpen(!menuIsOpen);
    const enableMenuAnimation = () => setIsFirstRender(false);

    const navLinks = [
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
            text: "Cart"
        }
    ]

    return (
        <header className={styles["main"]}>
            <div className={styles["top-bar"]}>
                <img src={logo} alt="Gray image placeholder for website logo" width="200" height="50" />
                <Navbar links={ navLinks } />
                <HamburgerMenu
                    isOpen={menuIsOpen}
                    setIsOpen={toggleHambugerMenu}
                    enableAnimation={enableMenuAnimation}
                />
            </div>
            <Navbar
                links={ navLinks }
                isOpen={menuIsOpen}
                shouldAnimate={!isFirstRender}
            />
            <div
                className={(
                    menuIsOpen ? styles["visible-backdrop"] : "") + " " + styles["backdrop"]
                }
                onClick={toggleHambugerMenu}
            ></div>
        </header>
    );
};

export default Header;
