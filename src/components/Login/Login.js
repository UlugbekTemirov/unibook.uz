import { Link } from "react-router-dom"
import { useState } from "react"
import "./Login.scss"

const Login = () => {

    const [oc_switcher, set_oc_switcher] = useState(false);

    const oc_switcher_func = () => {
        set_oc_switcher((prevState) => !prevState);
    }

    return <>
        <button className="btn-auth" onClick={oc_switcher_func}>Login</button>
            <div className={`${oc_switcher || "hidden"} login-modal`}>
        <div onClick={oc_switcher_func} className={`${oc_switcher || "hidden"} overlay`}></div>
            <div className="card">
            <div className="card-header d-flex">
                <h5>Login</h5>
                <span onClick={oc_switcher_func} className="icon icon-xmark"></span>
            </div>
            <form className="card-body d-flex flex-column">
                <button className="btn btn-google d-flex align-items-center justify-content-center"> <span className="icon icon-google me-4"></span><h6 className="m-0 fs-6">Continue with google</h6></button>
                <input className="form-control mt-3" type="text" placeholder="username"/>
                <input className="form-control mt-3" type="password" placeholder="password" /> 
                <div className="d-flex align-items-center mt-3 from-group">
                    <input id="stay_logged" name="stay_logged" type="checkbox" className="me-2" /> 
                    <label htmlFor="stay_logged">Stay logged in</label>
                </div>
                <button className="btn btn-outline-dark mt-3">Login</button>
            </form>
            <div className="card-footer">
                <Link to="/password-recovery">Forgot your password</Link>
                <div className="d-flex align-items-center">
                    <h6 className="m-0">No account yet?</h6> 
                    <Link to="/register">Register</Link>
                </div>
            </div>
            </div>
        </div>
    </>
}

export default Login