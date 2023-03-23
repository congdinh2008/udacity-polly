const PollItem = ({ item }) => {
  return (
    <div className="poll-item text-center">
      <div className="poll-info">
        <h4 className="poll-author">User 01</h4>
        <span className="poll-date">2022-02-02</span>
      </div>
      <button className="btn btn-light w-100">Show</button>
    </div>
  );
};

export default PollItem;
