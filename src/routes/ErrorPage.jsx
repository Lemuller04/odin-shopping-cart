import { NavLink } from "react-router-dom";

import Header from "../components/header/Header.jsx";
import "../styles/error-page.css";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="error-page-text">
        <h2>Error - Not Found</h2>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <p>
          You can go back to the home page clicking here:{" "}
          <NavLink to="/">Home</NavLink>
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
