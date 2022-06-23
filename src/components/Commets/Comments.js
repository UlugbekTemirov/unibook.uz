import "./Comments.scss";

function Comments({ commentContent, commentImage }) {
  return (
    <div className="comment">
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="img-fluid user-image"
        />
      </div>

      <div className="user-info">
        <div className="names">
          <p>Dilshod Murodov</p>
          <p className="text-muted">16 may</p>
        </div>
      </div>
      <div className="content-box">
        <p>{commentContent}</p>
      </div>

      {commentImage ? (
        <div className="comment-image rounded">
          <img className="rounded-3" src={commentImage} alt="" />
        </div>
      ) : null}
      <div className="d-flex align-items-center justify-content-end mt-3">
        <span className="text-muted">Like</span>
      </div>
    </div>
  );
}

export default Comments;
