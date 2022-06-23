import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "./forum_slice";
import { createSelector } from "reselect";
import "./Forumbar.scss";
import Question from "../Question";
import Spinner from "../Spinner";
import Error from "../Error";

const Forumbar = () => {
  const dispatch = useDispatch();

  const questionsSelector = createSelector(
    (state) => state.category.activeCategory,
    (state) => state.question.questions,
    (activeCategory, questions) => {
      if (activeCategory === "All") {
        return questions;
      } else {
        return questions.filter((s) => s.category === activeCategory);
      }
    }
  );
  const filteredQuestions = useSelector(questionsSelector);

  const { questionsLoadingStatus } = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(fetchQuestions());
    //eslint-disable-next-line
  }, []);

  if (!filteredQuestions.length) {
    return (
      <div className="col-lg-9">
        <h6 className="text-center">
          There are no questions related to this category
        </h6>
      </div>
    );
  }

  return (
    <div className="col-lg-9 forumbar">
      {questionsLoadingStatus === "loading" ? (
        <Spinner />
      ) : questionsLoadingStatus === "error" ? (
        <Error />
      ) : (
        filteredQuestions.map(({ id, ...args }) => (
          <Question key={id} id={id} {...args} />
        ))
      )}
    </div>
  );
};

export default Forumbar;
