import { Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import PollCollection from "../components/PollCollection";

const Home = (props) => {
  return (
    <Fragment>
      <LoadingBar />
      {props.loading === true ? null : (
        <section className="home">
          <PollCollection
            title={"New Questions"}
            questions={props.unAnsweredQuestions}
          />
          <PollCollection title={"Done"} questions={props.answeredQuestions} />
        </section>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    loading: authedUser.currentUser === null || Object.keys(questions).length === 0,
    answeredQuestions:
      authedUser.currentUser === null
        ? []
        : Object.values(questions).filter(
            (q) =>
              q.optionOne.votes.includes(authedUser.currentUser.id) ||
              q.optionTwo.votes.includes(authedUser.currentUser.id)
          ).sort((a, b) => b.timestamp - a.timestamp),
    unAnsweredQuestions:
      authedUser.currentUser === null
        ? []
        : Object.values(questions).filter(
            (q) =>
              !q.optionOne.votes.includes(authedUser.currentUser.id) &&
              !q.optionTwo.votes.includes(authedUser.currentUser.id)
          ).sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapStateToProps)(Home);
