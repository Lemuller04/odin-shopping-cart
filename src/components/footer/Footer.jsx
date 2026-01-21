import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles["main"]}>
            <p>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Lemuller04">
                    &copy; Leonardo Müller
                </a> for <a rel="noopener noreferrer" target="_blank" href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart">
                    The Odin Project
                </a>
            </p>
        </footer>
    );
};

export default Footer;
