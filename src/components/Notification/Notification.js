import "./Notification.scss"
import { useState } from "react"

const Notification = () => {
    const [oc_switcher, set_oc_switcher] = useState(false);

    const oc_switcher_func = () => {
        set_oc_switcher((prevState) => !prevState);
    }

    return <>
        <span onClick={oc_switcher_func} className="icon icon-notification"></span>
        <div className={`${oc_switcher || "hidden"} notification-modal`}>
            nothing yet
        </div>
    </>
}

export default Notification