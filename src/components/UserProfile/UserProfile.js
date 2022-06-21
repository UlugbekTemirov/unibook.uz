import "./UserProfile.scss"

const UserProfile = () => {
    return <>
        <div className="dropdown">
            <button className="btn btn-user-profile" type="button" id="dropdownBtn" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://picsum.photos/500/300?random=4" className="user-circle-image" alt="userImage" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownBtn">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </>
}

export default UserProfile