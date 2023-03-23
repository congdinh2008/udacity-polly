import avatar from "../assets/images/avatars/avatar-5.png";

const PollItem = () => {
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
            <span class="option-detail">Build our new application with JS</span>
            <button type="button" class="btn btn-vote w-100">
              Vote
            </button>
          </div>
          <div className="option">
            <span class="option-detail">Build our new application with JS</span>
            <button type="button" class="btn btn-vote w-100">
              Vote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PollItem;
