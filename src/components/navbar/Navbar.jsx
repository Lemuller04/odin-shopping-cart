import { Link, useLocation } from "react-router-dom";

const Navbar = ({ links }) => {
  const location = useLocation();

  return (
    <nav aria-label="Main navigation">
      <ul>
        {links.map((l) => {
          return (
            <li key={ l.path }>
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
