import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import PollCollection from "../components/PollCollection";

const Home = (props) => {
  const [activeTab, setActiveTab] = useState("unanswered");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Fragment>
      <LoadingBar />

      {props.loading === true ? null : (
        <section className="home">
          <div className="tab-group">
            <div className="tab-header">
              <button
                className={activeTab === "unanswered" ? "active" : ""}
                onClick={() => handleTabClick("unanswered")}
              >
                New Questions
              </button>
              <button
                className={activeTab === "answered" ? "active" : ""}
                onClick={() => handleTabClick("answered")}
              >
                Done
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "unanswered" && (
                <PollCollection
                  title={"New Questions"}
                  questions={props.unAnsweredQuestions}
                />
              )}
              {activeTab === "answered" && (
                <PollCollection
                  title={"Done"}
                  questions={props.answeredQuestions}
                />
              )}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    loading:
      authedUser.currentUser === null || Object.keys(questions).length === 0,
    answeredQuestions:
      authedUser.currentUser === null
        ? []
        : Object.values(questions)
            .filter(
              (q) =>
                q.optionOne.votes.includes(authedUser.currentUser.id) ||
                q.optionTwo.votes.includes(authedUser.currentUser.id)
            )
            .sort((a, b) => b.timestamp - a.timestamp),
    unAnsweredQuestions:
      authedUser.currentUser === null
        ? []
        : Object.values(questions)
            .filter(
              (q) =>
                !q.optionOne.votes.includes(authedUser.currentUser.id) &&
                !q.optionTwo.votes.includes(authedUser.currentUser.id)
            )
            .sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapStateToProps)(Home);
