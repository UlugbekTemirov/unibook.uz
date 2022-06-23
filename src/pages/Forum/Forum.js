import Forumbar from "../../components/Forumbar";
import Sidebar from "../../components/Sidebar";

const Forum = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center flex-column flex-wrap py-5 initial-block">
        <h1>Forum</h1>
        <p>Answer and enrich your knowledges</p>
      </div>
      <div className="container mt-3">
        <div className="row m-0">
          <Sidebar></Sidebar>
          <Forumbar></Forumbar>
        </div>
      </div>
    </>
  );
};

export default Forum;
