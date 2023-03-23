import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import avatar from "../assets/images/avatars/avatar-5.png";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollItem = (props) => {
  return (
    <section className="poll-item text-center my-3">
      <div className="author-info">
        <div className="author-title">Poll by User 01</div>
        <div className="author-avatar">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="poll-info">
        <h1>Would You Rather</h1>
        <div className="list-options d-flex justify-content-center">
          <div className="option">
            <span className="option-detail">Build our new application with JS</span>
            <button type="button" className="btn btn-vote w-100">
              Vote
            </button>
          </div>
          <div className="option">
            <span className="option-detail">Build our new application with JS</span>
            <button type="button" className="btn btn-vote w-100">
              Vote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (props) => {
  console.log(props.router);
  return {
    id: ""
  };
};

export default withRouter(connect(mapStateToProps)(PollItem));
