const PollOverview = ({ item }) => {
  return (
    <div className="poll-overview text-center">
      <div className="poll-overview-info">
        <h4 className="poll-overview-author">User 01</h4>
        <span className="poll-overview-date">2022-02-02</span>
      </div>
      <button className="btn btn-light w-100">Show</button>
    </div>
  );
};

export default PollOverview;
