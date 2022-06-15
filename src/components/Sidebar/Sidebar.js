import "./Sidebar.scss";
import Discussion from "../Discussion";
import { useState } from "react";

const Sidebar = () => {
  const [discussionPage, setDiscussionPage] = useState(false);

  const discussionHandler = () => {
    setDiscussionPage((prev) => !prev);
  };

  return (
    <div className="col-lg-3 sidebar">
      <button
        onClick={() => setDiscussionPage(true)}
        className="btn btn-success btn-discussion"
      >
        Start discussion
      </button>
      {discussionPage ? (
        <Discussion discussionHandler={discussionHandler} />
      ) : null}
      <div className="category-group">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
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
  );
};

export default Sidebar;
