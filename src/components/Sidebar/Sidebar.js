import "./Sidebar.scss";
import Discussion from "../Discussion";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, activeCategoryChanged } from "./sidebar_slice";
import { nanoid } from "@reduxjs/toolkit";
import classnames from "classnames";

const Sidebar = () => {
  const [discussionPage, setDiscussionPage] = useState(false);
  const { categories, categoriesLoadingStatus, activeCategory } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  const discussionHandler = () => {
    setDiscussionPage((prev) => !prev);
  };

  const renderCategories = (arr) => {
    if (categoriesLoadingStatus === "loading") {
      return <li className="category-name">Categories are loading</li>;
    } else if (categoriesLoadingStatus === "error") {
      return (
        <li className="category-name">
          Something went wrong, please check you internet connection and try
          again
        </li>
      );
    } else {
      return arr.map((item) => {
        const className = classnames("category-name m-2", "", {
          active: item === activeCategory,
        });
        return (
          <li
            onClick={() => {
              dispatch(activeCategoryChanged(item));
            }}
            key={nanoid()}
            className={className}
          >
            {item}
          </li>
        );
      });
    }
  };

  const categoryList = renderCategories(categories);

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
          className="btn btn-category"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Category
        </button>
        <ul
          className="collapse category-list list-unstyled"
          id="collapseExample"
        >
          {categoryList}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
