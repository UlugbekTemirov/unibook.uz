import "./Register.scss";

const Register = ({ activePageHandler }) => {
  return (
    <>
      <div className="register-modal">
        <div
          onClick={() => {
            activePageHandler("");
          }}
          className="overlay"
        ></div>
        <div className="card">
          <div className="card-header d-flex position-relative">
            <h5>Register</h5>
            <span
              onClick={() => {
                activePageHandler("");
              }}
              className="icon icon-xmark"
            ></span>
          </div>
          <form className="card-body d-flex flex-column">
            <input
              className="form-control"
              type="text"
              placeholder="Username or email"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
            />
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="btn btn-outline-dark mt-3 register-btn"
            >
              Register
            </button>
            <p className="continue text-center ">Regsiter with:</p>
            <button className="btn-google btn">
              <span className="text-info">Google</span>
            </button>
          </form>
          <div className="card-footer bg-white">
            <div className="d-flex align-items-center justify-content-end p-2">
              <h6 className="m-0">Already have an account?</h6>
              <span
                onClick={() => {
                  activePageHandler("login");
                }}
                className="text-info"
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
