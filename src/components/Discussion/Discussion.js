import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addQuestion } from "../Forumbar/forum_slice";
import { useDispatch } from "react-redux";
import "./Discussion.scss";

const Discussion = ({ discussionHandler }) => {
  const [category, setCategory] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const dispatch = useDispatch();

  const questionDetails = {
    id: nanoid(),
    category,
    questionTitle,
    questionContent,
    comments: [],
  };

  return (
    <>
      <div
        onClick={discussionHandler}
        className="overlay overlay-discussion"
      ></div>
      <form className=" discussion-modal">
        <div className="container">
          <input
            value={questionTitle}
            onChange={(e) => {
              setQuestionTitle(e.target.value);
            }}
            placeholder="Theme"
            className="form-control theme-of-discussion"
            type="text"
          />

          <textarea
            value={questionContent}
            onChange={(e) => {
              setQuestionContent(e.target.value);
            }}
            className="form-control"
            placeholder="Write a problem here"
          ></textarea>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-select mb-2"
            aria-label="Default select example"
          >
            <option selected>Select Category</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Programming">Programming</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addQuestion(questionDetails));
              discussionHandler();
            }}
            type="submit"
            className="btn btn-success"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={discussionHandler}
            className="btn btn-danger ms-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default Discussion;
