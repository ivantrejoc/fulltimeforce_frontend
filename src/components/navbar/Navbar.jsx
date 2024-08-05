import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav>
      <div className="container">
        <Link className="title-link" to="/">
          <h1 className="title">My Blog</h1>
        </Link>

        <div className="nav-links">
          <ul>
            <li>
              {location.pathname !== "/" && (
                <Link className="nav-link" to="/">
                  My posts
                </Link>
              )}
            </li>
            <li>
              {location.pathname !== "/create" && (
                <Link className="nav-link" to="/create">
                  Create Post
                </Link>
              )}
            </li>
          </ul>
        </div>
        <button className="logout">Sign out</button>
      </div>
    </nav>
  );
};

export default NavBar;
