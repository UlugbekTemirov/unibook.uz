import { Link } from "react-router-dom";
import Notification from "../Notification"
import Login from "../Login"
import Register from "../Register"
import Search from "../Search";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon icon-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Unibook.uz
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link d-flex" to="/forum">
                  <span className="icon icon-comment"></span> <h6>Forum</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex" to="/news">
                  <span className="icon icon-news"></span> <h6>News</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex" to="/chat">
                  <span className="icon icon-conversation"></span> <h6>Chat</h6>
                </Link>
              </li>
            </ul>
            <Search />
            <Notification />
            <Login />
            <Register />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
