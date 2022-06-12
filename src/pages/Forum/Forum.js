import Forumbar from "../../components/Forumbar";
import Sidebar from "../../components/Sidebar";

const Forum = () => {
    return <div className="container">
        <div className="row m-0">
        <Sidebar></Sidebar>
        <Forumbar></Forumbar>
    </div>
    </div>
}   

export default Forum;