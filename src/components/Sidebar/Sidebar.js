import "./Sidebar.scss"
import Discussion from "../Discussion"

const Sidebar = () => {
    return <div className="col-lg-3 sidebar">
        <Discussion />
        <div className="category-group">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Category
            </button>
            <ul className="collapse category-list" id="collapseExample">
                <li className="category-name">Math</li>
                <li className="category-name">English</li>
                <li className="category-name">Programming</li>
                <li className="category-name">Chemistry</li>
            </ul>
        </div>
    </div>
}

export default Sidebar