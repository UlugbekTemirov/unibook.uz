import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "./forum_slice";
import "./Forumbar.scss";
import Question from "../Question";
import Spinner from "../Spinner";
import Error from "../Error";

const Forumbar = () => {
  const dispatch = useDispatch();
  const { questions, questionsLoadingStatus } = useSelector(
    (state) => state.question
  );
  useEffect(() => {
    dispatch(fetchQuestions());
    //eslint-disable-next-line
  }, []);

  return (
    <div className="col-lg-9 forumbar">
      {questionsLoadingStatus === "loading" ? (
        <Spinner />
      ) : questionsLoadingStatus === "error" ? (
        <Error />
      ) : (
        questions.map(({ id, ...args }) => (
          <Question key={id} id={id} {...args} />
        ))
      )}
    </div>
  );
};

export default Forumbar;
