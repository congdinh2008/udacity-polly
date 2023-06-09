import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { handleVoteQuestion } from "../actions/questions";
import { formatQuestion } from "../helpers/helpers";
import { useEffect, useState } from "react";
import RouteURLs from "../constants/routeURLs";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollItem = ({ id, user, exists, question, selected, dispatch }) => {
  const [answer, setAnswer] = useState(selected);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!exists) {
      navigate(RouteURLs.NOT_FOUND_URL)
    }
  }, [exists, navigate])
  
  useEffect(() => {
    if (!selected && answer) {
      dispatch(handleVoteQuestion({ qid: id, answer }));
    }
  }, [answer, selected, dispatch, id]);

  const optionOneStats = () => {
    return (
      (question.optionOne.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
  };

  const optionTwoStats = () => {
    return (
      (question.optionTwo.votes.length /
        (question.optionOne.votes.length + question.optionTwo.votes.length)) *
      100
    ).toFixed(2);
  };

  return exists && (
    <section className="poll-item text-center my-3">
      <div className="author-info">
        <div className="author-title">Poll by {question.authorName}</div>
        <div className="author-avatar">
          <img src={question.avatarURL} alt={question.authorName} />
        </div>
      </div>
      <div className="poll-info my-3">
        <h1>Would You Rather</h1>
        <div className="list-options d-flex justify-content-center">
          <div className="option d-flex flex-column justify-content-between">
            <span className="option-detail">{question.optionOne.text}</span>
            <button
              type="button"
              className={`btn btn-vote w-100 ${
                answer === "optionOne" ? "selected" : ""
              }`}
              title="optionOne"
              onClick={(e) => setAnswer(e.target.title)}
              disabled={answer}
            >
              {answer === "optionOne" ? "Your Choice" : "Vote"}
            </button>
          </div>
          <div className="option d-flex flex-column justify-content-between">
            <span className="option-detail">{question.optionTwo.text}</span>
            <button
              type="button"
              className={`btn btn-vote w-100 ${
                answer === "optionTwo" ? "selected" : ""
              }`}
              title="optionTwo"
              onClick={(e) => setAnswer(e.target.title)}
              disabled={answer}
            >
              {answer === "optionTwo" ? "Your Choice" : "Vote"}
            </button>
          </div>
        </div>
        {answer && (
          <div className="statistic d-flex justify-content-center my-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Your Choice</th>
                  <th>Option</th>
                  <th>Total Votes</th>
                  <th>Voted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{answer === "optionOne" ? "Yes" : "No"}</td>
                  <td>{question.optionOne.text}</td>
                  <td>{question.optionOne.votes.length}</td>
                  <td>{optionOneStats()}%</td>
                </tr>
                <tr>
                  <td>{answer === "optionTwo" ? "Yes" : "No"}</td>
                  <td>{question.optionTwo.text}</td>
                  <td>{question.optionTwo.votes.length}</td>
                  <td>{optionTwoStats()}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Link to={RouteURLs.HOME_URL} className="btn btn-back">
        Home
      </Link>
    </section>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { router }) => {
  const { id } = router.params;
  const user = users[authedUser.currentUser.id];
  const exists = Object.keys(questions).includes(id);
  const question = questions[id];
  const selected = user.answers[id] || "";

  return {
    id,
    user,
    exists,
    question: question ? formatQuestion(question, users) : {},
    selected,
  };
};

export default withRouter(connect(mapStateToProps)(PollItem));
