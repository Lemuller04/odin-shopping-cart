import Navbar from "../navbar/Navbar.jsx";
import styles from "./Header.module.css";

const Header = () => {
    const navLinks = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "shop",
            text: "Shop",
        },
        {
            path: "cart",
            text: "Cart"
        }
    ]

    return (
        <header className={styles["main"]}>
            <img src="#" alt="Gray image placeholder for website logo" />
            <Navbar links={ navLinks } />
        </header>
    );
};

export default Header;
