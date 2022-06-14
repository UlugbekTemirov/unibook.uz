import "./Discussion.scss"
import { useState } from "react"

const Discussion = () => {

    const [oc_switcher, set_oc_switcher] = useState(false);

    const oc_switcher_func = () => {
        set_oc_switcher((prevState) => !prevState);
    }

    return <>
        <button onClick={oc_switcher_func} className="btn btn-success btn-discussion">Start discussion</button>
        <div onClick={oc_switcher_func} className={`${oc_switcher || "hidden"} overlay overlay-discussion`}></div>
        <form className={`${oc_switcher || "hidden"} discussion-modal`}>
            <div className="container">
                <input placeholder="Theme" className="form-control theme-of-discussion" type="text" />
                <textarea className="form-control" placeholder="Write a problem here"></textarea>
                <button type="submit" className="btn btn-success">Publish</button>
                <button type="button" onClick={oc_switcher_func} className="btn btn-danger ms-3">Cancel</button>
            </div>
        </form>
    </>
}

export default Discussion