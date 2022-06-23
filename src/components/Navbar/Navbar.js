import { Link } from "react-router-dom";
import { useState } from "react";
import Notification from "../Notification";
import Login from "../Login";
import Register from "../Register";
import Search from "../Search";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const activePath = useLocation().pathname.split("/")[1];
  const [activePage, setActivePage] = useState("");

  const classNameHandler = (arg) => {
    const className = `nav-item ${activePath === arg ? "active" : ""}`;
    return className;
  };

  const activePageHandler = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light p-lg-3 mb-3">
        <div className="container">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>

            <span className="icon icon-menu"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Unibook.uz
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={classNameHandler("forum")}>
                <Link className="nav-link d-flex" to="/forum">
                  <h6>Forum</h6>
                </Link>
              </li>
              <li className={classNameHandler("news")}>
                <Link className="nav-link d-flex" to="/news">
                  <h6>News</h6>
                </Link>
              </li>
              <li className={classNameHandler("chat")}>
                <Link className="nav-link d-flex" to="/chat">
                  <h6>Chat</h6>
                </Link>
              </li>
            </ul>
            <div className="extra d-flex align-items-center justify-content-center">
              <Search />
              <Notification />
            </div>
            <div className="account d-flex justify-content-start">
              <button
                onClick={() => {
                  activePageHandler("login");
                }}
                className="btn-auth"
              >
                Login
              </button>
              <button
                onClick={() => {
                  activePageHandler("register");
                }}
                className="btn-auth"
              >
                Register
              </button>
            </div>
            {activePage === "login" ? (
              <Login activePageHandler={activePageHandler} />
            ) : activePage === "register" ? (
              <Register activePageHandler={activePageHandler} />
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
