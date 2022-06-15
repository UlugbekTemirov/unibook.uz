import { Link } from "react-router-dom";
import "./Question.scss";

function Question({ id, category, questionTitle, comments }) {
  return (
    <div className="questions-block">
      <div className="user-account">
        <span className="user-name">DD</span>
      </div>
      <Link
        to={`/discussion/${id}`}
        className="question-blog text-decoration-none text-black"
      >
        <h4 className="m-0">{questionTitle}</h4>
        <p className="text-muted m-0">{category}</p>
      </Link>
      <div className="comments-block">
        <span className="icon icon-comment">
          <i className="fa-solid fa-comment">{comments.length}</i>
        </span>
      </div>
    </div>
  );
}

export default Question;
