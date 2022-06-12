import "./Notification.scss"
//import { useState } from "react"

const Notification = () => {
    // const [oc_switcher, set_oc_switcher] = useState(false);

    // const oc_switcher_func = () => {
    //     set_oc_switcher((prevState) => !prevState);
    // }

    return <>
       {/* <div onClick={oc_switcher_func} className={`${oc_switcher || "hidden"} overlay`}></div>
        <span onClick={oc_switcher_func} className="icon icon-notification"></span>
        <div className={`${oc_switcher || "hidden"} notification-modal`}>
            nothing yet
        </div> */}
        <div className="btn-group">
            <button type="button" className="btn btn-notification" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="icon icon-notification"></span>
                <span className="badge">14</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
        </div>
    </>
}

export default Notification