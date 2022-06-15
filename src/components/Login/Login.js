import { Link } from "react-router-dom";
import "./Login.scss";

const Login = ({ activePageHandler }) => {
  return (
    <>
      <div className="login-modal">
        <div
          onClick={() => {
            activePageHandler("");
          }}
          className="overlay"
        ></div>
        <div className="card">
          <div className="card-header d-flex">
            <h5>Login</h5>
            <span
              onClick={() => {
                activePageHandler("");
              }}
              className="icon icon-xmark"
            ></span>
          </div>
          <form className="card-body d-flex flex-column">
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Username or email"
            />
            <input
              className="form-control mt-3"
              type="password"
              placeholder="Password"
            />
            <div className="d-flex align-items-center mt-3 from-group">
              <input
                id="stay_logged"
                name="stay_logged"
                type="checkbox"
                className="me-2"
              />
              <label htmlFor="stay_logged">Stay logged in</label>
            </div>
            <button className="btn btn-outline-dark mt-3 login-btn">
              Login
            </button>
            <p className="mb-3 text-center continue">Or continue with:</p>
            <button className="btn btn-google d-flex align-items-center justify-content-center">
              <span className="text-info google">Google</span>
            </button>
          </form>
          <div className="card-footer bg-white">
            <Link className="d-block text-end" to="/password-recovery">
              Forgot your password
            </Link>
            <div className="d-flex align-items-center justify-content-end">
              <h6 className="m-0 text-muted">No account yet?</h6>
              <span
                onClick={() => {
                  activePageHandler("register");
                }}
                className="text-info"
              >
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
