import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SingleQuestion.scss";
import Comments from "../../components/Commets/Comments";
import { useEffect } from "react";
import { setQuestion } from "./question_slice";
import TextEditor from "../../components/TextEditor.js";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

function SingleQuestion() {
  const [toggleComments, setToggleComments] = useState(false);
  const [toggleAddComment, setToggleAddComment] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { question, questionLoadingStatus } = useSelector(
    (state) => state.comment
  );

  useEffect(() => {
    dispatch(setQuestion(id));
    //eslint-disable-next-line
  }, []);

  const commentsHandler = () => {
    setToggleComments((prev) => !prev);
  };

  const toggleAddCommentHandler = () => {
    setToggleAddComment((prev) => !prev);
  };
  if (questionLoadingStatus === "loading") {
    return <Spinner />;
  } else if (questionLoadingStatus === "error") {
    return <Error />;
  }
  return (
    <>
      <div
        style={{
          backgroundColor:
            question.category === "Math"
              ? "#ef564f"
              : question.category === "English"
              ? "#5bc0de"
              : question.category === "Programming"
              ? "#292b2c"
              : question.category === "Chemistry"
              ? "#f0ad4e"
              : "#ef564f",
        }}
        className="container-fluid d-flex align-items-center justify-content-center flex-column flex-wrap py-5 initial-block"
      >
        <h1>{question.category}</h1>
        <p>Reply questions and improve your degree</p>
      </div>
      <div className="container question mb-5">
        <div className="row">
          <div className="col-9">
            <div className="question__details">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="img-fluid profile-image"
                />
              </div>
              <div className="user-info">
                <div className="names">
                  <p>Dilshod Murodov</p>
                  <p className="text-muted">16 may</p>
                </div>
                <h4>{question.questionTitle}</h4>
              </div>
              <hr />
              <div className="question-content">
                <p>{question.questionContent}</p>
              </div>
              <button onClick={commentsHandler} className="btn toggle-btn">
                {toggleComments ? "Hide" : "Show"} answers
              </button>
              <hr />
              {toggleComments ? (
                <div
                  className={`comments-block ${toggleComments ? "active" : ""}`}
                >
                  {question.comments.length ? (
                    question.comments.map((comment) => (
                      <Comments key={comment.id} id={comment.id} {...comment} />
                    ))
                  ) : (
                    <h5>There are no comments yet</h5>
                  )}

                  <div
                    onClick={() => {
                      setToggleAddComment((prev) => !prev);
                    }}
                    className="add-comment d-flex align-items-center justify-content-start p-3  answer-box"
                  >
                    <div className="img-box">
                      <img
                        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="img-fluid profile-image"
                      />
                    </div>
                    <p className="add-comment-btn my-2">Write a Reply</p>
                  </div>
                </div>
              ) : null}
            </div>
            {toggleAddComment ? (
              <TextEditor
                id={id}
                toggleAddCommentHandler={toggleAddCommentHandler}
              />
            ) : null}
          </div>
          <div className="col-3 ">
            <button
              className="btn btn-info text-white "
              onClick={() => {
                setToggleComments(true);
                setToggleAddComment(true);
                setTimeout(() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }, 100);
              }}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleQuestion;
