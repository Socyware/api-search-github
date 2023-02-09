import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <Link to="/"  className="link">
        <h1>Github API</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
