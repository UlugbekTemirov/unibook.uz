import { Fragment } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return <Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="">Hidden brand</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/forum">Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" t0="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chat">Chat</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </Fragment>
}

export default Navbar;