import { Link } from "react-router-dom";
import styles from "./ErrorElement.module.css";

const ErrorElement = () => {
    return (
        <>
            <div className={styles["body"] + " " + "body"}>
                <h1>Not Found</h1>
                <p>Sorry, we couldn't find the page you where looking for.</p>
                <p><Link to="/">You can go back to the home page by clicking here.</Link></p>
            </div>
        </>
    );
}

export default ErrorElement;
