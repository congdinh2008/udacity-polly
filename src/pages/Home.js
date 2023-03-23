import { useEffect } from "react";
import { connect } from "react-redux";
import handleReceiveData from "../actions/shared";
import PollCollection from "../components/PollCollection";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveData());
  }, []);

  return (
    <section className="home">
      <PollCollection title={"New Questions"} questions={props.unAnsweredQuestions} />
      <PollCollection title={"Done"} questions={props.answeredQuestions} />
    </section>
  );
};

const mapStateToProps = ({ authedUser, questions }, props) => ({
  loading: authedUser === null,
  answeredQuestions: Object.values(questions).filter(
    (q) =>
      q.optionOne.votes.includes(authedUser.currentUser.id) ||
      q.optionTwo.votes.includes(authedUser.currentUser.id)
  ),
  unAnsweredQuestions: Object.values(questions).filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser.currentUser.id) &&
      !q.optionTwo.votes.includes(authedUser.currentUser.id)
  ),
});

export default connect(mapStateToProps)(Home);
