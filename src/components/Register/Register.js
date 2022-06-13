import { Link } from "react-router-dom"
import { useState } from "react"
import "./Register.scss"

const Register = () => {

    
    const [oc_switcher, set_oc_switcher] = useState(false);

    const oc_switcher_func = () => {
        set_oc_switcher((prevState) => !prevState);
    }

    return <>
            <button className="btn-auth" onClick={oc_switcher_func}>Register</button>
            <div className={`${oc_switcher || "hidden"} register-modal`}>
                <div onClick={oc_switcher_func} className="overlay"></div>
            <div className="card">
            <div className="card-header d-flex position-relative">
                <h5>Register</h5>
                <span onClick={oc_switcher_func} className="icon icon-xmark"></span>
            </div>
            <form className="card-body d-flex flex-column">
                <button className="btn-google btn"><span className="icon icon-google"></span> Register with google</button>
                <input className="form-control" type="text" placeholder="username or email"/>
                <input className="form-control" type="password" placeholder="password" /> 
                <input className="form-control" type="password" placeholder="confirm password" /> 
                <button className="btn btn-outline-dark mt-3">Register</button>
            </form>
            <div className="card-footer">
                <div className="d-flex align-items-center">
                    <h6 className="m-0">Already have an account?</h6> 
                    <Link to="/login">Login</Link>
                </div>
            </div>
            </div>
        </div>
    </>
}

export default Register