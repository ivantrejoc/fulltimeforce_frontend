import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/authServices";
import "./navbar.scss";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await signOut();
      console.log(response);
      if (response.status === 200) {
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
    }
  };
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
        <button className="logout" onClick={() => handleSignOut()}>
          Sign out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
